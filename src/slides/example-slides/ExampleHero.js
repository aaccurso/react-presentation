// Import React
import React, { Component } from 'react';

// Import Spectacle Core tags
import {
  Heading,
  Slide,
  Text
} from 'spectacle';

export default class ExampleHero extends Component {
  render() {
    return (
      <Slide bgColor='primary'>
        <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
          Spectacle Boilerplate
        </Heading>
        <Text margin='10px 0 0' textColor='tertiary' size={1} fit bold>
          open the presentation/index.js file to get started
        </Text>
      </Slide>
    );
  }
}
