// Import React
import React, { Component } from 'react';

// Import Spectacle Core tags
import { Slide, Heading, List, ListItem } from 'aaccurso-spectacle';

// Import components
import ReactLive from '../components/ReactLive';

//language=JavaScript
const code = `
class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            timer: 0
        };
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(this.tick, 1000);
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

export default class SlideLifecycleHooks extends Component {
  render() {
    return (
      <Slide>
        <Heading size={3}>Lifecycle Hooks</Heading>
        <List>
            <ListItem><strong>Mount</strong>: component is rendered for the first time.</ListItem>
            <ListItem><strong>Unmount</strong>: component is removed.</ListItem>
        </List>
        <ReactLive code={code}/>
      </Slide>
    );
  }
}
