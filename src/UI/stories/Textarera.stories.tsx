import React from 'react';
// eslint-disable-next-line id-blacklist
import { withKnobs, number } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import Textarea from '../TextArea';
import Wrapper from './Wrapper';

export default {
  component: Textarea,
  title: 'Textarea',
  decorators: [
    jsxDecorator,
    (storyFn) => <Wrapper>{storyFn()}</Wrapper>,
    withKnobs,
  ],
} as Meta;

export const TextareaStory: React.FC = () => (
  <Textarea
    rows={number('rows (height = 30px x rows)', 1)}
    style={{ color: '#fff' }}
  />
);
