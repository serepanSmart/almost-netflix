import React from 'react';
import { withKnobs, boolean, radios } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Wrapper from './Wrapper';

export default {
  component: ButtonGroup,
  title: 'ButtonGroupStory',
  decorators: [
    jsxDecorator,
    (storyFn) => <Wrapper>{storyFn()}</Wrapper>,
    withKnobs,
  ],
} as Meta;

export const ButtonGroupStory: React.FC = () => (
  <ButtonGroup
    noWrap={boolean('noWrap', false)}
    vertical={boolean('vertical', false)}
    align={radios(
      'align',
      {
        flex: 'flex',
        'inline-flex': 'inline-flex',
      },
      'flex',
    )}
    spacer={radios(
      'spacer',
      {
        top: 'top',
        bottom: 'bottom',
      },
      'flex',
    )}
  >
    <Button value="Button" onClick={action('Clicked!!!')} />
    <Button value="Button" onClick={action('Clicked!!!')} />
  </ButtonGroup>
);
