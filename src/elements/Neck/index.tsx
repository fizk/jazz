import * as React from 'react';
import {Fragment} from 'react';

type Props = {
    stringInterval?: number,
    barInterval?: number,
    nutOffset?: number,
}

export default class Neck extends React.Component<Props> {
    static defaultProps = {
        stringInterval: 25,
        barInterval: 75,
        nutOffset: 50,
    };

    render() {
        return (
            <Fragment>
                <g className={'neck__bars'}>
                    {[0,1,2,3,4,5,6,7,8,9,10,11,12].map(item => (
                        <rect stroke="none"
                              key={`neck-bar-${item}`}
                              fill="rgb(200, 200, 200)"
                              height={this.props.stringInterval * 5}
                              width={4}
                              x={item * this.props.barInterval + this.props.nutOffset}
                              y={0} />
                    ))}
                </g>
                <rect className={'neck__nut'}
                      stroke="none"
                      fill="black"
                      height={this.props.stringInterval * 5}
                      width={4}
                      x={this.props.nutOffset}
                      y={0} />
                <g className={'neck__markers'}>
                    {[3,5,7,9,12].map(item => {
                        if (item === 12) {
                            return (
                                <Fragment key={`neck-marker-${item}`}>
                                    <circle stroke="none"
                                            fill="rgb(200, 200, 200)"
                                            cx={
                                                this.props.nutOffset + (item * this.props.barInterval) - (this.props.barInterval / 2)
                                            }
                                            cy={this.props.stringInterval * 5 * .25}
                                            r={10} />
                                    <circle stroke="none"
                                            fill="rgb(200, 200, 200)"
                                            cx={
                                                this.props.nutOffset + (item * this.props.barInterval) - (this.props.barInterval / 2)
                                            }
                                            cy={this.props.stringInterval * 5 * .80}
                                            r={10} />
                                </Fragment>
                            );
                        } else {
                            return (
                                <circle stroke="none"
                                        fill="rgb(200, 200, 200)"
                                        cx={
                                            this.props.nutOffset + (item * this.props.barInterval) - ((this.props.barInterval) / 2)
                                        }
                                        cy={this.props.stringInterval * 5 / 2}
                                        r={10}
                                        key={`neck-marker-${item}`}/>
                            )
                        }
                    })}
                </g>
                <g className={'neck__strings'}>
                    {[0, 1, 2, 3, 4, 5].map(item => (
                        <rect stroke="black"
                              fill="white"
                              strokeWidth={1}
                              key={`neck-string-${item}`}
                              height={2}
                              width={this.props.barInterval * 13}
                              x={0}
                              y={item * this.props.stringInterval} />
                    ))}
                </g>
            </Fragment>
        )
    }
}
