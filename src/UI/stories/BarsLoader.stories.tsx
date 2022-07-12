import React from 'react';
import { withKnobs, color } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import BarsLoader from '../BarsLoader';
import Wrapper from './Wrapper';

export default {
  component: BarsLoader,
  title: 'BarsLoader',
  decorators: [
    jsxDecorator,
    (storyFn) => <Wrapper>{storyFn()}</Wrapper>,
    withKnobs,
  ],
} as Meta;

export const BarsLoaderStory: React.FC = () => (
  <BarsLoader bgColor={color('bgColor', 'white')} />
);
