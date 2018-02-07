import {storiesOf} from '@storybook/react';
import React from 'react';

const Greeting = (props) => (
    <h1 className="greeting">
        Hello, {props.name}!
    </h1>
);

storiesOf('Slides').add('Props', () => <Greeting name={'Alan'}/>);
