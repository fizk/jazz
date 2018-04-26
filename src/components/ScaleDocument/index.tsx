import * as React from 'react';
import {Container, Row, Column} from '../../elements/Grid'
import scales from '../../utilities/scalePositions';
import computeScale from "../../utilities/computeScale";
import Neck from '../../elements/Neck';
import ScalePosition from '../../elements/ScalePosition';

type Props = {
    musicKey: string,
}

export default class ScaleDocument extends React.Component<Props> {
    static defaultProps = {
        musicKey: 'F',
    };

    render() {

        const positions = {
            'c': ['5/4', '5/2', '5/1', '6/2', '6/1'],
            'c♯': ['5/4', '5/2', '5/1', '6/2', '6/1'],
            'd': ['5/4', '5/2', '5/1', '6/2', '6/1'],
            'd♯': ['5/4', '5/2', '5/1', '6/2', '6/1'],
            'e': ['6/2', '6/1', '5/4', '5/2', '5/1'],
            'f': ['6/2', '6/1', '5/4', '5/2', '5/1'],
            'f♯': ['6/2', '6/1', '5/4', '5/2', '5/1'],
            'g': ['6/2', '6/1', '5/4', '5/2', '5/1'],
            'g♯': ['6/2', '6/1', '5/4', '5/2', '5/1'],
            'a': ['6/4', '6/2', '6/1', '5/4', '5/2',],
            'a♯': ['6/4', '6/2', '6/1', '5/4', '5/2',],
            'b': ['5/2', '5/1', '6/2', '6/1'],
        };

        const data = positions[this.props.musicKey.toLowerCase()].map(position => {
            return {
                scale: computeScale(scales[position].scale, this.props.musicKey.toUpperCase()),
                startOn: scales[position].notes[this.props.musicKey.toUpperCase()]
            }
        });

        return (
            <Container>

                <Row>
                    <Column>
                        <svg xmlns={`http://www.w3.org/2000/svg`}
                             width={1024} height={180 * 7 + 20}
                             viewBox={`0 0 1024 ${180* 7 + 20}`}>
                            {data.map((position, index: number) => (
                                <g key={`pos-${index}`} transform={`translate(0, ${(180 * index + 20)})`}>
                                    <Neck  />
                                    <ScalePosition scale={position.scale}
                                        startOn={position.startOn}
                                        arpeggio={false} />
                                </g>
                            ))}
                        </svg>
                    </Column>
                </Row>
            </Container>
        )
    }
}
