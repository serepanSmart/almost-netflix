import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import Wrapper from './Wrapper';
import TabButton from '../TabButton';
import { action } from '@storybook/addon-actions';

export default {
  component: TabButton,
  title: 'TabButton',
  decorators: [
    jsxDecorator,
    (storyFn) => <Wrapper>{storyFn()}</Wrapper>,
    withKnobs,
  ],
} as Meta;

export const TabButtonStory: React.FC = () => (
  <>
    <TabButton
      active={boolean('active (when tab is selected)', false)}
      onClick={action('Chosen!!')}
      value={text('title', 'Tab Button')}
    />
  </>
);
