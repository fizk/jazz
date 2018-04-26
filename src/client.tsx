import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import App from './components/App'
import songsReducer from './components/SongsDocument/redux';
import songReducer from './components/SongDocument/redux'

const store = createStore(
    combineReducers({
        songs: songsReducer,
        song: songReducer,
    }),
    applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('[data-react]')
);
