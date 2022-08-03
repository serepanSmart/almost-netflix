import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import Modal from '../Modal';
import Button from '../Button';
import {
  InnerGroup,
  InnerCol,
  Label,
  Input,
  DatePicker,
  TextArea,
  ButtonGroup,
} from '..';
import moment from 'moment';
import Wrapper from './Wrapper';

export default {
  component: Modal,
  title: 'Modal',
  decorators: [
    jsxDecorator,
    (storyFn) => <Wrapper>{storyFn()}</Wrapper>,
    withKnobs,
  ],
} as Meta;

export const ModalStory: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleModalOpen = React.useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  // CHANGE DATE HANDLER
  const date = moment(new Date()).format('YYYY-MM-DD');

  const [selectedDate, setDate] = React.useState<string>(date.toString());

  const handleChangeDate = React.useCallback((newValue) => {
    const newDate = moment(newValue).format('YYYY-MM-DD');
    setDate(newDate);
  }, []);

  return (
    <>
      <Button value="Click to open Modal" onClick={handleModalOpen} />
      <Modal
        isModalOpened={isOpen}
        title={text('title', 'Modal Title')}
        onRequestClose={handleModalOpen}
      >
        <Modal.Body>
          <InnerGroup>
            <InnerCol spacer="right" size={1} direction="column">
              <Label type="col-checkbox" htmlFor="title" required>
                Title
              </Label>
              <Input required />
            </InnerCol>
            <InnerCol direction="column">
              <Label htmlFor="release_date" type="col-checkbox">
                Release Date
              </Label>
              <DatePicker
                portalId="root-portal"
                showWeekNumbers
                monthsShown={1}
                placeholderText="Select Date"
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
              <Input placeholder="https://" />
            </InnerCol>
          </InnerGroup>
          <InnerCol direction="column">
            <Label type="col-checkbox" htmlFor="overview" required>
              OVERVIEW
            </Label>
            <TextArea />
          </InnerCol>
        </Modal.Body>
        <Modal.Footer>
          <ButtonGroup>
            <Button type="submit" value="Submit" onClick={handleModalOpen} />
          </ButtonGroup>
        </Modal.Footer>
      </Modal>
    </>
  );
};
