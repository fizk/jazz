import * as React from 'react';
import {Fragment} from 'react';
import {Scale} from '../../../@types';

type Props = {
    scale: Scale[],
    stringInterval?: number,
    barInterval?: number,
    nutOffset?: number,
    startOn?: number,
    arpeggio?: boolean,
}

export default class ScalePosition extends React.Component<Props> {
    static defaultProps = {
        scale: [],
        stringInterval: 25,
        barInterval: 75,
        nutOffset: 50,
        startOn: 0,
        arpeggio: false,
    };

    render() {
        return (
            <g transform={`translate(${this.props.barInterval * (this.props.startOn - 1)}, 0)`}>
                {this.props.scale.map(note => (
                    <g key={`${note.position[0]}/${note.position[1]}`}
                        transform={`translate(${this.props.nutOffset + (note.position[1] * this.props.barInterval) - (this.props.barInterval / 2)}, ${((note.position[0] - 1) * this.props.stringInterval)})`}>

                        {this.props.arpeggio && (
                            <Fragment>
                                {(note.arpeggio === 'R') && (
                                    <rect fill={'red'}
                                          width={30}
                                          height={20}
                                          ry={10}
                                          transform={`translate(-10, -10)`}
                                    />
                                )}

                                {(typeof note.arpeggio === 'string' && note.arpeggio !== 'R')  && (
                                    <rect fill={'rgb(50, 50, 50)'}
                                          width={30}
                                          height={20}
                                          ry={10}
                                          transform={`translate(-10, -10)`}
                                    />
                                )}

                                {(note.arpeggio === undefined) && (
                                    <rect fill={'#ecebe8'}
                                          stroke={'rgb(50, 50, 50)'}
                                          width={30}
                                          height={20}
                                          ry={10}
                                          transform={`translate(-10, -10)`}
                                    />
                                )}

                                {(note.arpeggio !== undefined) && (
                                    <text fill={'white'} transform={`translate(${note.note.length === 1 ? -2 : -5}, 5)`} >
                                        {note.note}
                                    </text>
                                )}

                                {(note.arpeggio !== undefined) && (
                                    <text transform={`translate(${note.arpeggio.length === 1 ? -20 : -30}, -5)`} fontSize="12">{note.arpeggio}</text>
                                )}

                            </Fragment>
                        )}

                        {!this.props.arpeggio && (
                            <Fragment>
                                <rect fill={note.root ? 'red' : 'rgb(50, 50, 50)'}
                                      width={30}
                                      height={20}
                                      ry={10}
                                      transform={`translate(-10, -10)`}
                                />
                                <text fill={'white'} transform={`translate(-10, 5)`} >
                                    {note.note}
                                </text>
                                {/*<text transform={`translate(${note.finger.length === 1 ? -20 : -30}, -5)`} fontSize="12">{note.finger}</text>*/}
                                <text transform={`translate(${note.finger === 1 ? -20 : -30}, -5)`} fontSize="12">{note.finger}</text>
                            </Fragment>
                        )}
                    </g>
                ))}
            </g>
        );
    }
}
