import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import * as Header from './src/components/Header';

console.log(Header);
storiesOf('Header', module)
    .add('with text', () => {
        return (<Header />)
    })
    .add('with some emoji', () => (
        <Header />
    ));
