// Import React
import React, { Component } from 'react';

// Import Spectacle Core tags
import { Slide, Heading, Text, Image } from 'aaccurso-spectacle';

// Import Components
import AsideLink from '../components/AsideLink';

// Import styles
import { secondary } from '../utils/colors';

// Import assets
import CurrencyConverterImage from './assets/CurrencyConverter.png';

export default class SlideLiftStateUp extends Component {
  render() {
    return (
      <Slide>
        <Heading size={3}>Lift State Up</Heading>
        <Text>
            To <strong>share state</strong> between components you should rely on the <AsideLink color={secondary} href="https://reactjs.org/docs/state-and-lifecycle.html#the-data-flows-down" target="_blank">top-down data flow</AsideLink>.
        </Text>
        <Image src={CurrencyConverterImage}/>
      </Slide>
    );
  }
}
