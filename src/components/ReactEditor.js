// Import React related modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import Live React tags
import {
  LiveProvider, LiveEditor
} from 'react-live';

// Import styled components
import styled from 'styled-components';
import { lightGrey } from '../utils/colors';
import * as polished from 'polished';

const StyledProvider = styled(LiveProvider)`
  border-radius: ${polished.rem(3)};
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  overflow: hidden;
  margin-top: ${polished.rem(16)};
  margin-bottom: ${polished.rem(100)};
`;

const StyledEditor = styled(LiveEditor)`
  background: ${lightGrey};
  font-family: 'Source Code Pro', monospace;
  font-size: ${polished.rem(18)};
  overflow: scroll;
`;

export default class ReactLive extends Component {
  static propTypes = {
    code: PropTypes.string.isRequired
  };

  render() {
    const { code } = this.props;

    return (
      <StyledProvider {...this.props} code={code.trim()}>
        <StyledEditor/>
      </StyledProvider>
    );
  }
}
