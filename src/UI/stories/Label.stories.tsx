import React from 'react';
import { withKnobs, boolean, radios } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import Label from '../Label';
import Checkbox from '../Checkbox';
import Input from '../Input';
import Wrapper from './Wrapper';

export default {
  component: Label,
  title: 'Label',
  decorators: [
    jsxDecorator,
    (storyFn) => <Wrapper style={{ color: '#fff' }}>{storyFn()}</Wrapper>,
    withKnobs,
  ],
} as Meta;

export const LabelStory: React.FC = () => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);
  return (
    <>
      <Label
        required={boolean('required', false)}
        type={radios(
          'type',
          {
            'inline-checkbox': 'inline-checkbox',
            'single-checkbox': 'single-checkbox',
            'col-checkbox': 'col-checkbox',
          },
          'inline-checkbox',
        )}
      >
        <Checkbox
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        This is Label
      </Label>
      <Input />
    </>
  );
};
