// Import React
import React, { Component } from 'react';

// Import Spectacle Core tags
import { Slide, Heading, Text } from 'aaccurso-spectacle';

// Import components
import ReactLive from '../components/ReactLive';
import InlineCode from '../components/InlineCode';
import AsideLink from '../components/AsideLink';

// Import styles
import {secondary} from '../utils/colors';

//language=JavaScript
const code = `
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

render(<NumberList numbers={numbers}/>);
`;

export default class SlideLists extends Component {
  render() {
    return (
      <Slide>
        <Heading size={3}>Lists</Heading>
        <Text>
            We <InlineCode>map</InlineCode> a list of objects into components and assign a <AsideLink color={secondary} href="https://reactjs.org/docs/lists-and-keys.html#keys" target="_blank">key</AsideLink> to help identify which items were changed, added, or removed.
        </Text>
        <ReactLive code={code} noInline />
      </Slide>
    );
  }
}
