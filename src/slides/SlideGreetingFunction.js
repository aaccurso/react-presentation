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
const code = `
// import React from 'react';

const Greeting = (props) => (
  <h1>Hello {props.name}!</h1>
);

render(<Greeting name={'Alan'}/>);
`;

export default class SlideGreetingFunction extends Component {
  render() {
    return (
      <Slide bgColor='primary'>
        <ReactLive code={code} noInline/>
      </Slide>
    );
  }
}
