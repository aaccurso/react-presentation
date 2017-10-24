// Import React
import React, { Component } from 'react';

// Import Spectacle Core tags
import {
  Heading,
  Slide,
  Text,
  Link
} from 'aaccurso-spectacle';

// Import styled components
import styled from 'styled-components';
import { tertiary } from '../utils/colors';

const StyledLink = styled(Link)`
  color: ${tertiary};
  border-bottom: 1px dashed ${tertiary};

  &:hover {
    border-bottom-style: solid;
  }
`;

export default class SlideReactHero extends Component {
  render() {
    return (
      <Slide bgColor='secondary'>
        <Heading size={1} fit lineHeight={1} textColor='primary'>
          React
        </Heading>
        <Text textColor='tertiary' fit>
          A <StyledLink href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript" target="_blank">JavaScript</StyledLink> library for building user interfaces
        </Text>
      </Slide>
    );
  }
}
