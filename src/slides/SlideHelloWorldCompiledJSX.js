// Import React
import React, { Component } from 'react';

// Import Spectacle Core tags
import { Slide, Heading } from 'aaccurso-spectacle';

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
  HelloWorld,
  document.getElementById('root')
);
`;

export default class SlideHelloWorldCompiledJSX extends Component {
  render() {
    return (
      <Slide>
        <Heading size={3}>React.createElement()</Heading>
        <ReactLive code={code} noInline/>
      </Slide>
    );
  }
}
