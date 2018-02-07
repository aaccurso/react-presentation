import {storiesOf} from '@storybook/react';
import React from 'react';

const HelloWorld = (
    <h1 className="greeting">
        Hello, world!
    </h1>
);

storiesOf('Slides').add('JSX', () => HelloWorld);
