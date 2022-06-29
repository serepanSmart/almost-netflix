import React from 'react';
import { withKnobs, text, radios } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import Alert from '../Alert';
import Wrapper from './Wrapper';

export default {
  component: Alert,
  title: 'Alert',
  decorators: [
    jsxDecorator,
    (storyFn) => <Wrapper>{storyFn()}</Wrapper>,
    withKnobs,
  ],
} as Meta;

export const AlertStory: React.FC = () => (
  <Alert
    title={text('title', 'Title')}
    message={text('message', 'Message')}
    type={radios(
      'type',
      {
        error: 'error',
        warning: 'warning',
        info: 'info',
        success: 'success',
      },
      'error',
    )}
  />
);
