// Import React
import React, { Component } from 'react';

// Import Spectacle Core tags
import { Slide, Heading, Text } from 'aaccurso-spectacle';

// Import components
import ReactLive from '../components/ReactLive';
import AsideLink from '../components/AsideLink';

// Import colors
import { secondary } from '../utils/colors';

//language=JavaScript
const code = `
const Greeting = (props) => (
  <h1 className="greeting">
    Hello {props.name}!
  </h1>
);

render(<Greeting name={'Alan'}/>);
`;

export default class SlideGreetingFunctionProps extends Component {
  render() {
    return (
      <Slide>
        <Heading size={3}>Props</Heading>
        <Text>
          Components are like <AsideLink color={secondary} to="https://reactjs.org/docs/components-and-props.html#props-are-read-only" target="_blank">pure</AsideLink> JavaScript <strong>functions</strong>. They accept arbitrary inputs (props) and return <em>React elements</em>.
        </Text>
        <ReactLive code={code} noInline/>
      </Slide>
    );
  }
}
