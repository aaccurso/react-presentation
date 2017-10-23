// Import React
import React, { Component } from 'react';

// Import Spectacle Core tags
import {
  Heading,
  Slide,
  Text
} from 'aaccurso-spectacle';

export default class SlideReactHero extends Component {
  render() {
    return (
      <Slide bgColor='secondary'>
        <Heading size={1} fit lineHeight={1} textColor='primary'>
          React
        </Heading>
        <Text textColor='tertiary' size={1} fit bold>
          A JavaScript library for building user interfaces
        </Text>
      </Slide>
    );
  }
}
