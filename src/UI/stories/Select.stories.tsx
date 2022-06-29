import React from 'react';
// eslint-disable-next-line id-blacklist
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import Select, { Option } from '../Select';
import Wrapper from './Wrapper';

export default {
  component: Select,
  title: 'Select',
  decorators: [
    jsxDecorator,
    (storyFn) => <Wrapper>{storyFn()}</Wrapper>,
    withKnobs,
  ],
} as Meta;

const defaultOptions: Option[] = [
  { value: 'Crime', label: 'Crime' },
  { value: 'Documentary', label: 'Documentary' },
  { value: 'Horror', label: 'Horror' },
  { value: 'Comedy', label: 'Comedy' },
  { value: 'Music', label: 'Music' },
  { value: 'Adventure', label: 'Adventure' },
];

export const SelectStory: React.FC = () => {
  const [selectValue, setSelectValue] = React.useState<Option[]>([]);

  const handleChangeOption = (newValue: Option[]): void => {
    setSelectValue(newValue);
  };
  return (
    <div style={{ maxWidth: '200px' }}>
      <Select
        options={defaultOptions}
        isMulti={boolean('isMulti', false)}
        closeMenuOnSelect={boolean('closeMenuOnSelect', false)}
        value={selectValue}
        selectedOption={selectValue}
        onChange={handleChangeOption}
      />
    </div>
  );
};
