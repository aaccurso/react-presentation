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

const Greeting = (props) => (
  <h1 className="greeting">
    Hello {props.name}!
  </h1>
);

render(<Greeting name={'Alan'}/>);
`;

export default class SlideGreetingFunction extends Component {
  render() {
    return (
      <Slide>
        <Heading size={3}>Props</Heading>
        <ReactLive code={code} noInline/>
      </Slide>
    );
  }
}
