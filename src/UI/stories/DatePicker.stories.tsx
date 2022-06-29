import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import DatePicker from '../DatePicker';
import moment from 'moment';
import Wrapper from './Wrapper';

export default {
  component: DatePicker,
  title: 'DatePicker',
  decorators: [
    jsxDecorator,
    (storyFn) => <Wrapper>{storyFn()}</Wrapper>,
    withKnobs,
  ],
} as Meta;

export const DatePickerStory: React.FC = () => {
  // CHANGE DATE HANDLER
  const date = moment(new Date()).format('YYYY-MM-DD');

  const [selectedDate, setDate] = React.useState<string>(date.toString());

  const handleChangeDate = React.useCallback((newValue) => {
    const newDate = moment(newValue).format('YYYY-MM-DD');
    setDate(newDate);
  }, []);
  return <DatePicker value={selectedDate} onChange={handleChangeDate} />;
};
