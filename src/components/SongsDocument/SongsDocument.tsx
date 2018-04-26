import * as React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {SongListItemType} from "../../../@types";

type Props = {
    songs: SongListItemType[]
    loading: boolean
}

export default class SongsDocument extends React.Component<Props> {
    static defaultProps = {
        songs: [],
        loading: false
    };

    render() {
        return (
            <div>
                {this.props.loading && (
                    <div>Loading...</div>
                )}
                <ul>
                    {this.props.songs.map((song: SongListItemType) => (
                        <li key={`song-item-${song.id}`}>
                            <Link to={`/songs/${song.id}`}><h3>{song.title}</h3></Link>
                            <p>{song.composer} ({song.date})</p>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
