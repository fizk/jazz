import * as React from 'react';
import {StatelessComponent, Fragment} from 'react';

interface Props {
    meta: {
        key: string
        minor: boolean
        time: [number, number]
        beats: number
        bars: number
        lines: number
    }
    sequence: {
        chord: string | null
        chordNotes: string[]
        section: string | null
        position: {
            x: number
            y: number
        }
    }[]
}
const LeadSheet: StatelessComponent<Props> = ({sequence, meta}) => {

    const width = 960;
    const lineSpace = 100;
    const padding = 4;
    const topPadding = 100;

    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             height={(meta.lines * lineSpace)+topPadding}
             width={width + (2*padding)}
             viewBox={`0 0 ${width + (2 * padding)} ${(meta.lines * lineSpace) + topPadding}`}>

            <g transform={`translate(${padding}, ${topPadding})`}>
                {Array.from({length: meta.lines}).map((_, index) => (
                    <g key={`staff-${index}`}>
                        {[0, 5, 10, 15, 20].map(spaceBetweenLines => (
                            <line key={`line-${spaceBetweenLines}`}
                                  x1={0}
                                  y1={(index * lineSpace + spaceBetweenLines)}
                                  x2={width}
                                  y2={(index * lineSpace + spaceBetweenLines)}
                                  stroke={`rgb(200, 200, 200)`}
                            />
                        ))}

                        {[0, 1, 2, 3, 4].map((bar, i) => (
                            <line key={`bar-${index}-${i}`}
                                  x1={width / 4 * bar}
                                  y1={index * lineSpace}
                                  x2={width / 4  * bar}
                                  y2={(index * lineSpace) + 20}
                                  stroke={`rgb(200, 200, 200)`}
                            />
                        ))}
                    </g>
                ))}
                {sequence.map((beat, index) => {
                    return (
                        <Fragment key={`chord-${index}`}>


                            {beat.section && (
                                <Fragment>
                                    <text x={(width / meta.time[0] / 4) * beat.position.x}
                                          y={lineSpace * beat.position.y - 20}>
                                        {beat.section}
                                    </text>
                                    <line key={`bar-${index}`}
                                          x1={(width/ meta.time[0] / 4) * beat.position.x}
                                          y1={lineSpace * beat.position.y}
                                          x2={(width / meta.time[0] / 4) * beat.position.x}
                                          y2={lineSpace * beat.position.y + 20}
                                          strokeWidth={2}
                                          stroke={`black`}
                                    />
                                </Fragment>
                            )}
                            {beat.chord && (
                                <Fragment>
                                    <text x={((width / meta.time[0] / 4) * beat.position.x) + 6}
                                          y={(lineSpace * beat.position.y) -3}>
                                        {beat.chord}
                                    </text>
                                    <text x={((width / meta.time[0] / 4) * beat.position.x) + 6}
                                          y={(lineSpace * beat.position.y) -15}
                                          fontSize={8}
                                    >
                                        {beat.chordNotes.join(', ')}
                                    </text>
                                </Fragment>
                            )}
                        </Fragment>
                    )
                })}
            </g>
        </svg>
    )
};

export default LeadSheet;
