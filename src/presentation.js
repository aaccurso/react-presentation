// Import React
import React from 'react';

// Import Spectacle Core tags
import { Deck } from 'aaccurso-spectacle';

// Import components
import ExampleHero from './slides/example-slides/ExampleHero';
import ExampleHeadings from './slides/example-slides/ExampleHeadings';
import ExampleList from './slides/example-slides/ExampleList';
import ExampleBlockQuote from './slides/example-slides/ExampleBlockQuote';
import ReactLive from './slides/ReactLive';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const theme = createTheme({
  primary: 'white',
  secondary: '#1F2022',
  tertiary: '#03A9FC',
  quartenary: '#CECECE'
}, {
  primary: 'Montserrat',
  secondary: 'Helvetica'
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['fade']} transitionDuration={500} theme={theme}>
        <ReactLive/>
        <ExampleHero/>
        <ExampleHeadings/>
        <ExampleList/>
        <ExampleBlockQuote/>
      </Deck>
    );
  }
}