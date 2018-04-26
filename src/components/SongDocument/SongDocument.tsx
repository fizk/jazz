import * as React from "react";
import {Fragment} from 'react';
import LeadSheet from '../../elements/LeadSheet';
import {LeadSheetType} from "../../../@types";

type Props = {
    id: string
    song: LeadSheetType
    loading: boolean
}

export default class SongDocument extends React.Component<Props> {
    static defaultProps = {
        song: undefined,
        loading: false
    };

    render() {
        return (
            <div>
                {this.props.loading && (
                    <div>Loading...</div>
                )}
                {this.props.song && (
                    <Fragment>
                        <div>
                            <h1>{this.props.song.info.title}</h1>
                            <h2>{this.props.song.info.composer} {this.props.song.info.date}</h2>
                            <h4>
                                {this.props.song.meta.minor && <span>{this.props.song.meta.key}m</span>}
                                {this.props.song.meta.minor || <span>{this.props.song.meta.key}</span>}-
                                {this.props.song.meta.time.join('/')}
                            </h4>

                            <h5>Parts</h5>
                            {this.props.song.meta.parts.join(', ')}
                        </div>
                        <div>
                            <LeadSheet
                                meta={this.props.song.meta}
                                sequence={this.props.song.sequence}
                            />
                        </div>
                    </Fragment>
                )}
            </div>
        )
    }
}
