// Import React
import React, { Component } from 'react';

// Import Spectacle Core tags
import { Slide, Heading, Text } from 'aaccurso-spectacle';

// Import components
import ReactLive from '../components/ReactLive';

//language=JavaScript
const code = `
class NameForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(\`Hello, \$\{this.state.name\}!\`);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
`;

export default class SlideForms extends Component {
  render() {
    return (
      <Slide>
        <Heading size={3}>Forms</Heading>
        <Text>
            <strong>One-way binding</strong> of input value. Only a change in state can trigger a new render. To update the state we subscribe to the input's events.
        </Text>
        <ReactLive code={code} />
      </Slide>
    );
  }
}
