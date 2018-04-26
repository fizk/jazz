import * as React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {onLoadSongs} from './redux';
import SongsDocument from './SongsDocument';
import {SongsStoreType} from "../../../@types";

const mapStateToProps = (state: {songs: SongsStoreType}): SongsStoreType => ({
    songs: state.songs.songs,
    loading: state.songs.loading,
    error: state.songs.error,
});

const mapDispatchToProps = (dispatch, props) => ({
    load: () => dispatch(onLoadSongs(props.musicKey)),
});

const withStore = Component => (
    class extends React.Component<{load: () => void}> {
        componentDidMount() {
            this.props.load()
        }

        render() {
            return <Component {...this.props} />
        }
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(withStore(SongsDocument))
