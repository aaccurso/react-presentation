import React from 'react';
import { storiesOf } from '@storybook/react';

const ListItem = ({ value }) => (
    <li>{value}</li>
);

const NumberList = ({ numbers }) => {
    const listItems = numbers.map(number => (
        <ListItem
            key={number.toString()}
            value={number}
        />
    ));

    return <ul>{listItems}</ul>;
};

const numbers = [1, 2, 3, 4, 5];

storiesOf('Slides', module).add('Lists', () => <NumberList numbers={numbers}/>);
