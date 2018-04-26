import * as React from 'react';
import {StatelessComponent} from 'react';
import {Route, NavLink as Link} from 'react-router-dom';
import ScaleDocument from '../../components/ScaleDocument';
import ArpeggioDocument from '../../components/ArpeggioDocument';
import './index.scss';

const ScalePage: StatelessComponent<{}> = () => (
    <div>
        <Route path="/scales" exact render={() => (
            <div>
                <ul>
                    <li><Link to="/scales/c">C</Link></li>
                    <li><Link to="/scales/d">D</Link></li>
                    <li><Link to="/scales/e">E</Link></li>
                    <li><Link to="/scales/f">F</Link></li>
                    <li><Link to="/scales/g">G</Link></li>
                    <li><Link to="/scales/a">A</Link></li>
                    <li><Link to="/scales/b">B</Link></li>
                </ul>
            </div>
        )}/>

        <Route path="/scales/:key" exact render={({match: {params}}) => (
            <ScaleDocument musicKey={params.key} />
        )}/>

        <Route path="/scales/:key/arpeggio" exact render={({match: {params}}) => (
            <ArpeggioDocument musicKey={params.key} />
        )}/>

    </div>
);

export default ScalePage;
