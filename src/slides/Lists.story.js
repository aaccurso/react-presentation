import {storiesOf} from '@storybook/react';
import React from 'react';

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

storiesOf('Slides').add('Lists', () => <NumberList numbers={numbers}/>);
