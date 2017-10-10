// Import React
import React from 'react';

// Import Spectacle Core tags
import { Deck } from 'aaccurso-spectacle';

// Import slides
import SlideHelloWorld from './slides/SlideHelloWorld';
import SlideHelloWorldCompiledJSX from './slides/SlideHelloWorldCompiledJSX';
import SlideHelloWorldFunction from './slides/SlideGreetingFunction';
import ExampleHero from './slides/example-slides/ExampleHero';
import ExampleHeadings from './slides/example-slides/ExampleHeadings';
import ExampleList from './slides/example-slides/ExampleList';
import ExampleBlockQuote from './slides/example-slides/ExampleBlockQuote';

// Import theme
import createTheme from 'aaccurso-spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('aaccurso-spectacle/lib/themes/default/index.css');

const colors = {};
const fonts = {
  primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  secondary: 'Helvetica'
};

const theme = createTheme(colors, fonts);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['fade']} transitionDuration={500} theme={theme} progress={'bar'}>
        <SlideHelloWorld/>
        <SlideHelloWorldCompiledJSX/>
        <SlideHelloWorldFunction/>
        <ExampleHero/>
        <ExampleHeadings/>
        <ExampleList/>
        <ExampleBlockQuote/>
      </Deck>
    );
  }
}