import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

function loadStories() {
    requireAll(require.context('../src', true, /.*\.story\.js$/));
}

addDecorator((story, context) =>
    withInfo({
        text: 'common info',
        styles: { button: { base: { zIndex: 1 } } }
    })(story)(context)
);

configure(loadStories, module);
