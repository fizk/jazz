import * as React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {onLoadSong} from "./redux";
import SongDocument from './SongDocument'
import {SongStoreType} from "../../../@types";

const mapStateToProps = (state: {song: SongStoreType}): SongStoreType => ({
    song: state.song.song,
    loading: state.song.loading,
    error: state.song.error,
});

const mapDispatchToProps = (dispatch, props) => ({
    load: () => dispatch(onLoadSong(props.id)),
});

const withStore = (Component) => (
    class extends React.Component<{load: () => void}> {
        componentDidMount() {
            this.props.load()
        }

        render() {
            return <Component {...this.props} />
        }
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(withStore(SongDocument));
