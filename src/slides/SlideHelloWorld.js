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

render(
  <h1 className="greeting">
    Hello, world!
  </h1>,
  document.getElementById('root')
);
`;

export default class SlideHelloWorld extends Component {
  render() {
    return (
      <Slide bgColor='primary'>
        <Heading size={3}>JSX</Heading>
        <Text>JSX produces <em>React elements</em>. You can embed any <strong>JavaScript expression</strong> in JSX by wrapping it in curly braces.</Text>
        <ReactLive code={code} noInline/>
      </Slide>
    );
  }
}
