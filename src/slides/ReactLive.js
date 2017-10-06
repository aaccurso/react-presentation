import React, { Component } from 'react';

// Import Spectacle Core tags
import { Slide } from 'spectacle';

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live';

export default class ReactLive extends Component {
  render() {
    const code = `
        <div>
            <strong>Hello World!</strong>
        </div>
    `;

    return (
      <Slide bgColor='primary'>
        <LiveProvider code={code}>
          <LiveEditor/>
          <LiveError/>
          <LivePreview/>
        </LiveProvider>
      </Slide>
    );
  }
}
