// Import React
import React, { Component } from 'react';

// Import Spectacle Core tags
import {
  Heading,
  Slide,
  Text
} from 'aaccurso-spectacle';

// Import components
import ReactLive from '../components/ReactLive';

//language=JavaScript
const code = (`
// import React from 'react';
// import { render } from 'react-dom';

render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);`).trim();

export default class SlideHelloWorld extends Component {
  render() {
    return (
      <Slide bgColor='primary'>
        <ReactLive code={code} noInline/>
      </Slide>
    );
  }
}