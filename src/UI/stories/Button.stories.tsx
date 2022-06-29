import React from 'react';
import { withKnobs, boolean, text, radios } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import Button, { IButtonProps } from '../Button';
import Wrapper from './Wrapper';
import { ThreeDotsVertical } from '@styled-icons/bootstrap';

export default {
  component: Button,
  title: 'Button',
  decorators: [
    jsxDecorator,
    (storyFn) => <Wrapper style={{ background: 'white' }}>{storyFn()}</Wrapper>,
    withKnobs,
  ],
} as Meta;

export const ButtonStory: React.FC<IButtonProps> = () => (
  <Button
    value={text('value', 'Button')}
    onClick={action('Clicked!!!')}
    icon={boolean('icon', false)}
    isLoading={boolean('loading', false)}
    theme={radios(
      'theme',
      {
        primary: 'primary',
        light: 'light',
        reject: 'reject',
      },
      'primary',
    )}
  >
    <ThreeDotsVertical />
  </Button>
);
