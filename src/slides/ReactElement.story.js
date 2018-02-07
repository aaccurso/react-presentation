import {storiesOf} from '@storybook/react';
import React from 'react';

const HelloWorld = React.createElement(
    'h1', // type
    { className: 'greeting' }, // props
    'Hello, world!' // children
);

storiesOf('Slides').add('React Element', () => HelloWorld);
