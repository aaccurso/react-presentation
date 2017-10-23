// Import React
import React, { Component } from 'react';

// Import Spectacle Core tags
import { Slide, Heading, Text } from 'aaccurso-spectacle';

// Import components
import ReactLive from '../components/ReactLive';

//language=JavaScript
const code = `
// import React from 'react';
// import { render } from 'react-dom';

const HelloWorld = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);

render(
  HelloWorld, // React element
  document.getElementById('root') // DOM container
);
`;

export default class SlideReactDOM extends Component {
  render() {
    return (
      <Slide>
        <Heading size={3}>ReactDOM</Heading>
        <Text>Takes care of <strong>rendering</strong> and updating the DOM to match the React elements.</Text>
        <ReactLive code={code} noInline/>
      </Slide>
    );
  }
}
