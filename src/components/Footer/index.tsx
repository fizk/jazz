import * as React from 'react';
import {StatelessComponent} from 'react';
import {Container, Column, Row} from '../../elements/Grid';
import './index.scss';

const Footer: StatelessComponent<{}> = () => (
    <footer className="footer">
        <Container>
            <Row>
                <Column>
                    footer
                </Column>
            </Row>
        </Container>
    </footer>
);

export default Footer;
