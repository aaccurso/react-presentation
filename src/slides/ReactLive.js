import React, { Component } from 'react';

// Import Spectacle Core tags
import { Slide } from 'spectacle';

// Import Live React tags
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live';

// Import styled components
import styled, { css } from 'styled-components'
import { lightGrey, red, foreground } from '../utils/colors';
import * as polished from 'polished'

const StyledProvider = styled(LiveProvider)`
  border-radius: ${polished.rem(3)};
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  overflow: hidden;
  margin-bottom: ${polished.rem(100)};
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
  font-size: ${polished.rem(14)};
  height: ${polished.rem(350)};
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
  padding: ${polished.rem(8)};
  background: ${red};
  color: ${foreground};
`;

const code = (`
<div>
    <h1>React</h1>
    <strong>Hello World!</strong>
</div>
`).trim();

export default class ReactLive extends Component {
  render() {
    return (
      <Slide bgColor='primary'>
        <StyledProvider code={code}>
          <LiveWrapper>
            <StyledEditor/>
            <StyledPreview/>
          </LiveWrapper>
          <StyledError/>
        </StyledProvider>
      </Slide>
    );
  }
}
