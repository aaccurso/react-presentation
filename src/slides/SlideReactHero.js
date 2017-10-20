// Import React
import React, { Component } from 'react';

// Import Spectacle Core tags
import {
  Heading,
  Slide,
  Text
} from 'aaccurso-spectacle';

export default class ExampleHero extends Component {
  render() {
    return (
      <Slide bgColor='primary'>
        <Heading size={1} fit lineHeight={1} textColor='secondary'>
          React
        </Heading>
        <Text textColor='tertiary' size={1} fit bold>
          A JavaScript library for building user interfaces
        </Text>
      </Slide>
    );
  }
}
