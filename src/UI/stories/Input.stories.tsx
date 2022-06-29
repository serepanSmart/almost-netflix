import React from 'react';
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import Input from '../Input';
import Wrapper from './Wrapper';

export default {
  component: Input,
  title: 'Input',
  decorators: [
    jsxDecorator,
    (storyFn) => <Wrapper>{storyFn()}</Wrapper>,
    withKnobs,
  ],
} as Meta;

export const InputStory: React.FC = () => (
  <Input
    placeholder={text('placeholder', 'Placeholder')}
    disabled={boolean('disabled', false)}
    margin={radios(
      'margin',
      {
        left: 'left',
        right: 'right',
      },
      'left',
    )}
  />
);
