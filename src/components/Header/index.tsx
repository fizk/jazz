import * as React from 'react';
import {StatelessComponent} from 'react';
import {Route, NavLink as Link} from 'react-router-dom';
import {Container, Column, Row} from '../../elements/Grid';
import './index.scss';

const Header: StatelessComponent<{}> = () => (
    <header className="header">
        <Container>
            <Row>
                <Column>
                    <nav>
                        <ul>
                            <li><Link to="/">home</Link></li>
                            <li><Link to="/songs">songs</Link></li>
                            <li><Link to="/scales">scales</Link></li>
                        </ul>
                    </nav>
                </Column>
            </Row>
        </Container>
    </header>
);

export default Header;
