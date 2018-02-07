import {storiesOf} from '@storybook/react';
import React from 'react';

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

storiesOf('Slides').add('State and Events', () => <Counter />);
