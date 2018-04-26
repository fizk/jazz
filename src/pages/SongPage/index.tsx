import * as React from 'react';
import {StatelessComponent} from 'react';
import {Route, Link} from 'react-router-dom';
import SongsDocument from '../../components/SongsDocument';
import SongDocument from '../../components/SongDocument';
import './index.scss';

const SongPage: StatelessComponent<{}> = () => (
    <div>
        <Route path="/songs/key/:key" exact render={({match: {params}}) => <SongsDocument musicKey={params.key} />} />
        <Route path="/songs/:id" exact render={({match: {params}}) => <SongDocument id={params.id} />} />
        <Route path="/songs" exact component={SongsDocument} />
    </div>
);

export default SongPage;
