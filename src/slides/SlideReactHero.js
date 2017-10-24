// Import React
import React, { Component } from 'react';

// Import Spectacle Core tags
import {
  Heading,
  Slide,
  Text
} from 'aaccurso-spectacle';

// Import components
import AsideLink from '../components/AsideLink';

export default class SlideReactHero extends Component {
  render() {
    return (
      <Slide bgColor='secondary'>
        <Heading size={1} fit lineHeight={1} textColor='primary'>
          React
        </Heading>
        <Text textColor='tertiary' fit>
          A <AsideLink href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript" target="_blank">JavaScript</AsideLink> library for building user interfaces
        </Text>
      </Slide>
    );
  }
}
