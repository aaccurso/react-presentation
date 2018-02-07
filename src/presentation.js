// Import React
import React, { Component } from 'react';

// Import Spectacle Core tags
import { Deck } from 'aaccurso-spectacle';

// Import slides
import SlideReactHero from './slides/SlideReactHero';
import SlideReactElement from './slides/SlideReactElement';
import SlideJSX from './slides/SlideJSX';
import SlideReactDOM from './slides/SlideReactDOM';
import SlideProps from './slides/SlideProps';
import SlideLifecycleHooks from './slides/SlideLifecycleHooks'
import SlideStateAndEvents from './slides/SlideStateAndEvents';

// Import theme
import createTheme from 'aaccurso-spectacle/lib/themes/default';

// Import colors
import { primary, secondary, tertiary } from './utils/colors';

// Require CSS
import 'normalize.css';

// Configure presentation theme
const colors = { primary, secondary, tertiary };
const fonts = {
  primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  secondary: 'Helvetica'
};
const theme = createTheme(colors, fonts);

export default class Presentation extends Component {
  render() {
    return (
      <Deck transition={['fade']} transitionDuration={500} theme={theme} progress={'bar'}>
        <SlideReactHero/>
        <SlideReactElement/>
        <SlideReactDOM/>
        <SlideJSX/>
        <SlideProps/>
        <SlideStateAndEvents/>
        <SlideLifecycleHooks/>
      </Deck>
    );
  }
}