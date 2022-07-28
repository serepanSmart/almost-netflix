import React, { useEffect, useState } from 'react';
import {
  Modal,
  Button,
  ButtonGroup,
  Input,
  InnerGroup,
  InnerCol,
  Label,
  TextArea,
  DatePicker,
  Select,
  Option,
} from '@/UI';
import { useModalContext } from '@/context';
import moment from 'moment';
import { Formik, Form, Field } from 'formik';
import { defaultOptions, ErrorMsg } from './helpers';
import useValidateFields from './validate';

const MovieDataForm: React.FC = () => {

  const { onRequestClose, movie, setMovie, onSubmit, handleInputChange } =
    useModalContext();

  const { validateInputValue, validateUrlValue, validateGenres } =
    useValidateFields();

  const initValues = movie || {
    overview: '',
    poster_path: '',
    release_date: '',
    revenue: 0,
    runtime: 0,
    title: '',
    vote_average: 0,
    genres: [],
  };

  // CHANGE SELECT GENRES HANDLERS
  const value = (): Option[] | null => {
    if (!movie && !movie?.genres.length) {
      return null;
    }
    return movie?.genres?.map((g) => ({
      label: g,
      value: g,
    }));
  };

  const [selectValue, setSelectValue] = useState<Option[]>(value());

  const handleChangeOption = (newValue: Option[]): void => {
    setSelectValue(newValue);
    if (movie) {
      setMovie((prev) => ({
        ...prev,
        genres: newValue.map((g) => g.value),
      }));
    }
  };

  // CHANGE DATE HANDLER
  const getMovieDate = (): string => {
    if (movie) {
      return movie?.release_date;
    } else {
      return '';
    }
  };

  const [selectedDate, setDate] = useState<string>(getMovieDate());

  const handleChangeDate = (newValue: string): void => {
    const newDate = moment(newValue).format('YYYY-MM-DD');
    setDate(newDate);
    if (movie) {
      setMovie((prev) => ({
        ...prev,
        release_date: newDate,
      }));
    }
  };

  useEffect(() => {
    // ADD 'TAGLINE' FIELD IF IT IS EMPTY AND IT IS REQUIRED
    !movie?.tagline &&
      setMovie((prev) => {
        if (prev) {
          return {
            ...prev,
            tagline: movie.tagline ? movie.tagline : 'No tagline yet',
          };
        }
      });
  }, [movie?.tagline, movie?.title, setMovie]);

  return (
    <Formik
      initialValues={initValues}
      onSubmit={(_, actions) => {
        actions.setSubmitting(false);
        onSubmit(movie);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Modal.Body>
            <InnerGroup>
              <InnerCol spacer='right' size={1} direction='column'>
                <Label type='col-checkbox' htmlFor='title' required>
                  Title
                </Label>
                <Field
                  id='title'
                  name='title'
                  as={Input}
                  value={movie?.title ?? ''}
                  onChange={handleInputChange}
                  placeholder='Title'
                  validate={() => validateInputValue(movie?.title)}
                />
                {errors.title && touched.title ? (
                  <ErrorMsg>{errors.title}</ErrorMsg>
                ) : null}
              </InnerCol>
              <InnerCol direction='column'>
                <Label htmlFor='release_date' type='col-checkbox'>
                  Release Date
                </Label>
                <Field
                  as={DatePicker}
                  portalId='root-portal'
                  showWeekNumbers
                  monthsShown={1}
                  placeholderText='Select Date'
                  id='release_date'
                  value={selectedDate}
                  onChange={handleChangeDate}
                />
              </InnerCol>
            </InnerGroup>
            <InnerGroup>
              <InnerCol spacer='right' size={1} direction='column'>
                <Label type='col-checkbox' htmlFor='poster_path' required>
                  Movie Url
                </Label>
                <Field
                  as={Input}
                  id='poster_path'
                  name='poster_path'
                  placeholder='https://'
                  type='url'
                  value={movie?.poster_path ?? ''}
                  onChange={handleInputChange}
                  validate={() => validateUrlValue(movie?.poster_path)}
                />
                {errors.poster_path && touched.poster_path ? (
                  <ErrorMsg>{errors.poster_path}</ErrorMsg>
                ) : null}
              </InnerCol>
              <InnerCol direction='column'>
                <Label type='col-checkbox' htmlFor='vote_average'>
                  Rating
                </Label>
                <Field
                  as={Input}
                  id='vote_average'
                  name='vote_average'
                  type='number'
                  step={0.1}
                  value={movie?.vote_average ?? 0}
                  onChange={handleInputChange}
                  placeholder='Set Rating'
                />
              </InnerCol>
            </InnerGroup>
            <InnerGroup>
              <InnerCol spacer='right' size={1} direction='column'>
                <Label type='col-checkbox' required>
                  Genre
                </Label>
                <Field
                  as={Select}
                  options={defaultOptions}
                  isMulti
                  id='genres'
                  name='genres'
                  closeMenuOnSelect={false}
                  value={selectValue}
                  onChange={handleChangeOption}
                  validate={() => validateGenres(selectValue)}
                />
                {errors.genres && touched.genres ? (
                  <ErrorMsg>{errors.genres}</ErrorMsg>
                ) : null}
              </InnerCol>
              <InnerCol direction='column'>
                <Label htmlFor='runtime' type='col-checkbox' required>
                  Runtime
                </Label>
                <Field
                  as={Input}
                  id='runtime'
                  name='runtime'
                  type='number'
                  value={movie?.runtime || 0}
                  onChange={handleInputChange}
                  placeholder='Minutes'
                  validate={() => validateInputValue(movie?.runtime)}
                />
                {errors.runtime && touched.runtime ? (
                  <ErrorMsg>{errors.runtime}</ErrorMsg>
                ) : null}
              </InnerCol>
            </InnerGroup>
            <InnerCol direction='column'>
              <Label type='col-checkbox' htmlFor='overview' required>
                OVERVIEW
              </Label>
              <Field
                as={TextArea}
                rows={2}
                name='overview'
                id='overview'
                value={movie?.overview ?? ''}
                onChange={handleInputChange}
                validate={() => validateInputValue(movie?.overview)}
                placeholder='Movie description'
              />
              {errors.overview && touched.overview ? (
                <ErrorMsg>{errors.overview}</ErrorMsg>
              ) : null}
            </InnerCol>
          </Modal.Body>
          <Modal.Footer>
            <ButtonGroup>
              <Button
                type='button'
                value='Reset'
                onClick={onRequestClose}
                theme='reject'
              />
              <Button type='submit' value='Submit' onClick={null} />
            </ButtonGroup>
          </Modal.Footer>
        </Form>
      )}
    </Formik>
  );
};

export default MovieDataForm;
