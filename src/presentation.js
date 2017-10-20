// Import React
import React from 'react';

// Import Spectacle Core tags
import { Deck } from 'aaccurso-spectacle';

// Import slides
import SlideReactHero from './slides/SlideReactHero';
import SlideReactElement from './slides/SlideReactElement';
import SlideHelloWorld from './slides/SlideHelloWorld';
import SlideHelloWorldCompiledJSX from './slides/SlideHelloWorldCompiledJSX';
import SlideHelloWorldFunction from './slides/SlideGreetingFunction';

// Import theme
import createTheme from 'aaccurso-spectacle/lib/themes/default';

// Import colors
import { react } from './utils/colors';

// Require CSS
require('normalize.css');
require('aaccurso-spectacle/lib/themes/default/index.css');

const colors = {
  primary: react
};
const fonts = {
  primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  secondary: 'Helvetica'
};

const theme = createTheme(colors, fonts);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['fade']} transitionDuration={500} theme={theme} progress={'bar'}>
        <SlideReactHero/>
        <SlideReactElement/>
        <SlideHelloWorld/>
        <SlideHelloWorldCompiledJSX/>
        <SlideHelloWorldFunction/>
      </Deck>
    );
  }
}