// Import React
import React, { Component } from "react";

// Import Spectacle Core tags
import {
  Heading,
  Slide,
  Text
} from "spectacle";

export default class ExampleHeadings extends Component {
  render() {
    return (
      <Slide bgColor="tertiary">
        <Heading size={6} textColor="primary" caps>Typography</Heading>
        <Heading size={1} textColor="secondary">Heading 1</Heading>
        <Heading size={2} textColor="secondary">Heading 2</Heading>
        <Heading size={3} textColor="secondary">Heading 3</Heading>
        <Heading size={4} textColor="secondary">Heading 4</Heading>
        <Heading size={5} textColor="secondary">Heading 5</Heading>
        <Text size={6} textColor="secondary">Standard text</Text>
      </Slide>
    );
  }
}