// Import React
import React, { Component } from 'react';

// Import Spectacle Core tags
import { Slide, Heading, Text } from 'aaccurso-spectacle';

// Import components
import ReactLive from '../components/ReactLive';
import AsideLink from '../components/AsideLink';

// Import colors
import { secondary } from '../utils/colors';

//language=JavaScript
const code = `
class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            timer: 0
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState(
            ({ timer }) => ({ timer: timer + 1 })
        );
    }

    render() {
        return this.state.timer;
    }
}
`;

export default class SlideState extends Component {
  render() {
    return (
      <Slide>
        <Heading size={3}>State</Heading>
        <ReactLive code={code}/>
      </Slide>
    );
  }
}
