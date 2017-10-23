// Import React
import React, { Component } from 'react';

// Import Spectacle Core tags
import { Slide, Heading, Text } from 'aaccurso-spectacle';

// Import components
import ReactEditor from '../components/ReactEditor';

//language=JavaScript
const code = `
import React from 'react';

const HelloWorld = React.createElement(
  'h1', // type
  { className: 'greeting' }, // props
  'Hello, world!' // children
);
`;

export default class SlideReactElement extends Component {
  render() {
    return (
      <Slide>
        <Heading size={3}>React Element</Heading>
        <Text>Elements are the smallest building blocks of React apps. Unlike browser DOM elements, React elements are immutable plain objects, and are cheap to create.</Text>
        <ReactEditor code={code}/>
      </Slide>
    );
  }
}
