import { configure } from '@storybook/react';

function loadStories() {
    require('../stories/index.tsx');
    require('../stories/components/header.tsx');
}

configure(loadStories, module);
