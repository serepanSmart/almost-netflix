import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
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
import { Formik, Form, Field, ErrorMessage, ErrorMessageProps } from 'formik';
import { Colors } from '@/UI';
import { checkUrlRegExp } from '@/constants';

const ErrorMsg = styled.div`
  color: ${Colors.Scarlet};
`;

const Message: React.FC<ErrorMessageProps> = ({ name }) => {
  return (
    <ErrorMessage render={(msg) => <ErrorMsg>{msg}</ErrorMsg>} name={name} />
  );
};

const defaultOptions: Option[] = [
  { value: 'Crime', label: 'Crime' },
  { value: 'Documentary', label: 'Documentary' },
  { value: 'Horror', label: 'Horror' },
  { value: 'Comedy', label: 'Comedy' },
  { value: 'Music', label: 'Music' },
  { value: 'Adventure', label: 'Adventure' },
];

const MovieDataForm: React.FC = () => {
  // CHANGE OPEN MODAL HANDLERS
  const { onRequestClose, movie, onSubmit, handleInputChange } =
    useModalContext();

  // CHANGE SELECT GENRES HANDLERS
  const value = (): Option[] | null => {
    if (!movie?.genres?.length) {
      return null;
    }
    return movie?.genres?.map((g) => ({
      label: g,
      value: g,
    }));
  };

  const [selectValue, setSelectValue] = useState<Option[]>(value());

  const handleChangeOption = useCallback(
    (newValue: Option[]) => {
      setSelectValue(newValue);
      if (movie) {
        movie.genres = newValue.map((g) => g.value);
      }
    },
    [movie],
  );

  // CHANGE DATE HANDLER
  const getMovieDate = useCallback(() => {
    if (movie) {
      return movie?.release_date;
    } else {
      return '';
    }
  }, [movie]);

  const [selectedDate, setDate] = useState<string>(getMovieDate());

  const handleChangeDate = useCallback(
    (newValue) => {
      const newDate = moment(newValue).format('YYYY-MM-DD');
      setDate(newDate);
      if (movie) {
        movie.release_date = newDate;
      }
    },
    [movie],
  );

  // VALIDATE FIELDS
  const validateInputValue = useCallback((value) => {
    let error: string | undefined;
    if (!value && !value?.length) {
      error = 'This field is required';
    }
    return error;
  }, []);

  const validateUrlValue = (): string => {
    let error: string;
    const regex = new RegExp(checkUrlRegExp);
    if (!movie?.poster_path?.length) {
      error = 'This field is required';
    } else if (!regex.test(movie?.poster_path)) {
      error = 'Please fill in correct URL address';
    }
    return error;
  };

  return (
    <Formik initialValues={movie} onSubmit={null}>
      <Form noValidate onSubmit={(e) => onSubmit(e, movie)}>
        <Modal.Body>
          <InnerGroup>
            <InnerCol spacer="right" size={1} direction="column">
              <Label type="col-checkbox" htmlFor="title" required>
                Title
              </Label>
              <Field
                id="title"
                name="title"
                required
                as={Input}
                value={movie?.title ?? ''}
                onChange={handleInputChange}
                validate={() => validateInputValue(movie?.title)}
                placeholder="Title"
              />
              <Message name="title" />
            </InnerCol>
            <InnerCol direction="column">
              <Label htmlFor="release_date" type="col-checkbox">
                Release Date
              </Label>
              <Field
                as={DatePicker}
                portalId="root-portal"
                showWeekNumbers
                monthsShown={1}
                placeholderText="Select Date"
                id="release_date"
                value={selectedDate}
                onChange={handleChangeDate}
              />
            </InnerCol>
          </InnerGroup>
          <InnerGroup>
            <InnerCol spacer="right" size={1} direction="column">
              <Label type="col-checkbox" htmlFor="poster_path" required>
                Movie Url
              </Label>
              <Field
                as={Input}
                id="poster_path"
                name="poster_path"
                placeholder="https://"
                type="url"
                value={movie?.poster_path ?? ''}
                onChange={handleInputChange}
                validate={validateUrlValue}
              />
              <Message name="poster_path" />
            </InnerCol>
            <InnerCol direction="column">
              <Label type="col-checkbox" htmlFor="vote_average">
                Rating
              </Label>
              <Field
                as={Input}
                id="vote_average"
                name="vote_average"
                type="number"
                step={0.1}
                value={movie?.vote_average ?? 0}
                onChange={handleInputChange}
                placeholder="Set Rating"
              />
            </InnerCol>
          </InnerGroup>
          <InnerGroup>
            <InnerCol spacer="right" size={1} direction="column">
              <Label type="col-checkbox" required>
                Genre
              </Label>
              <Field
                as={Select}
                options={defaultOptions}
                isMulti
                id="genres"
                name="genres"
                closeMenuOnSelect={false}
                value={selectValue}
                onChange={handleChangeOption}
                validate={() => validateInputValue(selectValue)}
              />
              <Message name="genres" />
            </InnerCol>
            <InnerCol direction="column">
              <Label htmlFor="runtime" type="col-checkbox" required>
                Runtime
              </Label>
              <Field
                as={Input}
                id="runtime"
                name="runtime"
                type="number"
                value={movie?.runtime || 0}
                onChange={handleInputChange}
                placeholder="Minutes"
              />
              <Message name="runtime" />
            </InnerCol>
          </InnerGroup>
          <InnerCol direction="column">
            <Label type="col-checkbox" htmlFor="overview" required>
              OVERVIEW
            </Label>
            <Field
              as={TextArea}
              rows={2}
              name="overview"
              id="overview"
              value={movie?.overview ?? ''}
              onChange={handleInputChange}
              validate={() => validateInputValue(movie?.overview)}
              placeholder="Movie description"
            />
            <Message name="overview" />
          </InnerCol>
        </Modal.Body>
        <Modal.Footer>
          <ButtonGroup>
            <Button
              type="button"
              value="Reset"
              onClick={onRequestClose}
              theme="reject"
            />
            <Button type="submit" value="Submit" onClick={null} />
          </ButtonGroup>
        </Modal.Footer>
      </Form>
    </Formik>
  );
};

export default MovieDataForm;
