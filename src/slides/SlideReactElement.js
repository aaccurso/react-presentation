// Import React
import React, { Component } from 'react';

// Import Spectacle Core tags
import { Slide, Heading, Text } from 'aaccurso-spectacle';

// Import components
import ReactEditor from '../components/ReactEditor';

//language=JavaScript
const code = `
// import React from 'react';

const HelloWorld = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);
`;

export default class SlideReactElement extends Component {
  render() {
    return (
      <Slide>
        <Heading size={3}>React Element</Heading>
        <ReactEditor code={code}/>
      </Slide>
    );
  }
}
