// Import React
import React, { Component } from 'react';

// Import Spectacle Core tags
import {
  Heading,
  Slide,
  List,
  ListItem
} from 'aaccurso-spectacle';

export default class ExampleList extends Component {
  render() {
    return (
      <Slide bgColor='primary' textColor='tertiary'>
        <Heading size={6} textColor='secondary' caps>Standard List</Heading>
        <List>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
          <ListItem>Item 3</ListItem>
          <ListItem>Item 4</ListItem>
        </List>
      </Slide>
    );
  }
}