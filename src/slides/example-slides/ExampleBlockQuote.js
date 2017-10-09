// Import React
import React, { Component } from 'react';

// Import Spectacle Core tags
import {
  Slide,
  BlockQuote,
  Cite,
  Quote
} from 'aaccurso-spectacle';

export default class ExampleBlockQuote extends Component {
  render() {
    return (
      <Slide bgColor='secondary' textColor='primary'>
        <BlockQuote>
          <Quote>Example Quote</Quote>
          <Cite>Author</Cite>
        </BlockQuote>
      </Slide>
    );
  }
}