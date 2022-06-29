import React from 'react';
import { Meta } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import Loader from '../Loader';
import Wrapper from './Wrapper';

export default {
  component: Loader,
  title: 'Loader',
  decorators: [
    jsxDecorator,
    (storyFn) => <Wrapper>{storyFn()}</Wrapper>,
  ],
} as Meta;

export const LoaderStory: React.FC = () => <Loader />;
