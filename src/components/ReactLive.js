// Import React related modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import Live React tags
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live';

// Import styled components
import styled, { css } from 'styled-components';
import { lightGrey, red, foreground } from '../utils/colors';
import { rem } from 'polished';

const StyledProvider = styled(LiveProvider)`
  border-radius: ${rem(3)};
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  overflow: auto;
  max-height: 400px;
  margin-top: ${rem(16)};
  margin-bottom: ${rem(16)};
  margin-left: -${rem(100)};
  margin-right: -${rem(100)};
`;

const LiveWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const column = css`
  flex-basis: 50%;
  width: 50%;
  max-width: 50%;
  @media (max-width: 600px) {
    flex-basis: auto;
    width: 100%;
    max-width: 100%;
  }
`;

const StyledEditor = styled(LiveEditor)`
  background: ${lightGrey};
  font-family: 'Source Code Pro', monospace;
  font-size: ${rem(16)};
  overflow: scroll;
  ${column}
`;

const StyledPreview = styled(LivePreview)`
  position: relative;
  padding: 0.5rem;
  background: white;
  color: black;
  height: auto;
  overflow: hidden;
  ${column}
`;

const StyledError = styled(LiveError)`
  display: block;
  padding: ${rem(8)};
  background: ${red};
  color: ${foreground};
`;

export default class ReactLive extends Component {
  static propTypes = {
    code: PropTypes.string.isRequired
  };

  render() {
    const { code } = this.props;

    return (
      <StyledProvider {...this.props} code={code.trim()}>
        <LiveWrapper>
          <StyledEditor/>
          <StyledPreview/>
        </LiveWrapper>
        <StyledError/>
      </StyledProvider>
    );
  }
}
