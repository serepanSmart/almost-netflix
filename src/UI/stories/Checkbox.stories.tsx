import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import Checkbox from '../Checkbox';
import Wrapper from './Wrapper';

export default {
  component: Checkbox,
  title: 'Checkbox',
  decorators: [
    jsxDecorator,
    (storyFn) => <Wrapper>{storyFn()}</Wrapper>,
    withKnobs,
  ],
} as Meta;

export const CheckboxStory: React.FC = () => (
  <Checkbox
    checked={boolean('checked', false)}
    disabled={boolean('disabled', false)}
  />
);
