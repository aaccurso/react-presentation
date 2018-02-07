// Import React
import React, { Component } from 'react';

// Import Spectacle Core tags
import { Slide, Heading, List, ListItem } from 'aaccurso-spectacle';

// Import components
import ReactLive from '../components/ReactLive';

//language=JavaScript
const code = `
class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }));
    }

    render() {
        // @TODO: show message when counter reaches 10
        return (
            <button onClick={this.handleClick}>
                {this.state.counter}
            </button>
        );
    }
}
`;

export default class SlideStateAndEvents extends Component {
  render() {
    return (
      <Slide>
        <Heading size={3}>State and Events</Heading>
        <List>
            <ListItem><strong>State</strong>: internal state of the component over time.</ListItem>
            <ListItem><strong>Events</strong>: user interactions with components.</ListItem>
        </List>
        <ReactLive code={code}/>
      </Slide>
    );
  }
}
