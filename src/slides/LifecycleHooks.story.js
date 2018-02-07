import {storiesOf} from '@storybook/react';
import React from 'react';

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

storiesOf('Slides').add('Lifecycle Hooks', () => <Timer />);
