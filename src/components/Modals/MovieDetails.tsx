import React, { useState, useCallback } from 'react';
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

const defaultOptions: Option[] = [
  { value: 'crime', label: 'Crime' },
  { value: 'documentary', label: 'Documentary' },
  { value: 'horror', label: 'Horror' },
  { value: 'comedy', label: 'Comedy' },
];

const MovieDetails: React.FC = () => {
  // CHANGE OPEN MODAL HANDLERS
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleClose = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  // CHANGE SELECT GENRES HANDLERS
  const [selectedOption, setSelectedOption] = useState<Option>(null);

  const handleChangeOption = useCallback((newValue: Option) => {
    setSelectedOption(newValue);
  }, []);

  // CHANGE INPUT HANDLERS.
  const [value, setInputValue] = useState<Record<string, string | undefined>>({
    value: '' || undefined,
  });
  const [textValue, setTextValue] = useState<string>('');

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget;
      setInputValue({ name: value });
    },
    [],
  );

  const handleTextareaChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
      setTextValue(e.currentTarget.value);
    },
    [],
  );

  // CHANGE DATE HANDLER
  const [selectedDate, setDate] = useState<Date>();

  const handleChangeDate = useCallback(
    (newValue: Date) => {
      setDate(newValue);
    },
    [setDate],
  );

  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnOverlayClick
      title="Add Movie"
      onRequestClose={handleClose}
    >
      <form action="">
        <Modal.Body>
          <InnerGroup>
            <InnerCol spacer="right" size={1} direction="column">
              <Label htmlFor="movie-name" type="col-checkbox">
                Title
              </Label>
              <Input
                value={value?.value}
                onChange={handleInputChange}
                id="movie-name"
                name="movie-name"
                placeholder="Title"
              />
            </InnerCol>
            <InnerCol direction="column">
              <Label htmlFor="movie-date" type="col-checkbox">
                Release Date
              </Label>
              <DatePicker
                portalId="root-portal"
                selected={selectedDate}
                onChange={handleChangeDate}
                showWeekNumbers
                monthsShown={1}
                placeholderText="Select Date"
                id="movie-date"
              />
            </InnerCol>
          </InnerGroup>
          <InnerGroup>
            <InnerCol spacer="right" size={1} direction="column">
              <Label htmlFor="movie-url" type="col-checkbox">
                Movie Url
              </Label>
              <Input
                value={value?.value}
                onChange={handleInputChange}
                id="movie-url"
                name="movie-url"
                placeholder="https://"
                type="url"
              />
            </InnerCol>
            <InnerCol direction="column">
              <Label type="col-checkbox">Rating</Label>
              <Input
                value={value?.value}
                onChange={handleInputChange}
                id="movie-rating"
                name="movie-rating"
                placeholder="Set rating"
              />
            </InnerCol>
          </InnerGroup>
          <InnerGroup>
            <InnerCol spacer="right" size={1} direction="column">
              <Label htmlFor="movie-name" type="col-checkbox">
                Genre
              </Label>
              <Select
                onChange={handleChangeOption}
                options={defaultOptions}
                isMulti
                selectedOption={selectedOption}
                value={selectedOption}
                closeMenuOnSelect={false}
              />
            </InnerCol>
            <InnerCol direction="column">
              <Label htmlFor="movie-date" type="col-checkbox">
                Runtime
              </Label>
              <Input
                value={value?.value}
                onChange={handleInputChange}
                id="movie-runtime"
                name="movie-runtime"
                placeholder="Minutes"
              />
            </InnerCol>
          </InnerGroup>
          <InnerCol direction="column">
            <Label type="col-checkbox">OVERVIEW</Label>
            <TextArea
              rows={2}
              value={textValue}
              onChange={handleTextareaChange}
              name="movie-overview"
              placeholder="Movie description"
            />
          </InnerCol>
        </Modal.Body>
        <Modal.Footer>
          <ButtonGroup>
            <Button
              type="button"
              value="Reset"
              onClick={handleClose}
              theme="reject"
            />
            <Button type="button" value="Submit" onClick={handleClose} />
          </ButtonGroup>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default MovieDetails;
