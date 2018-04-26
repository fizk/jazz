import * as React from 'react';
import {StatelessComponent} from 'react';
import {Container} from '../../elements/Grid'
import './index.scss';

const Main: StatelessComponent<{}> = ({children}) => (
    <main role="main">
        <Container>
            {children}
        </Container>
    </main>
);

export default Main;
