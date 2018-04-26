import * as React from 'react';
import {StatelessComponent, Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
import HomePage from '../../pages/HomePage';
import SongPage from '../../pages/SongPage';
import ScalePage from '../../pages/ScalePage';
import './index.scss';

const App: StatelessComponent<{}> = () => (
    <Router>
        <div className="app">
            <Header />
            <Main>
                <Route path="/" exact component={HomePage} />
                <Route path="/scales" component={ScalePage} />
                <Route path="/songs" component={SongPage} />
            </Main>
            <Footer />
        </div>
    </Router>
);

export default App;
