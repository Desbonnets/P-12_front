import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Rectangle } from "recharts";


/**
 * Custom active Tooltip's LineChart
 * @param {Boolean}  [Props.active='true']
 * @param {Array}   [Props.payload=[]]
 * @returns tooltip or null
 */
const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div className='TooltipSession'>
          <p>{`${payload[0].value} `}min</p>
        </div>
      );
    }
    return null;
  };
/**
 * Custom active Tooltip's BarChart
 * @param {prop}
 * @return {JSX.Element} Rectangle component
 */
const CustomCursor = ({ points }) => {
    return (
      <Rectangle
        fill="#000000"
        opacity={0.2}
        x={points[1].x}
        width={1000}
        height={300}
      />
    );
  };

/**
 * Permet de faire un graphique (LineChart) de la durée moyenne des sessions
 * @param {Array} data Exemple: data= [{ day: 1, sessionLength: 30 }, { day: 2, sessionLength: 23 }]
 */
class dureeSession extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { data } = this.props;

        return (
            <div className='SessionGraph'>
                <ResponsiveContainer minWidth={'100%'} minHeight={'100%'}>
                    <LineChart data={data} margin={{ top: 25, right: 0, left: 0, bottom: 25, }}>
                        <XAxis interval="preserveStartEnd" fillOpacity={0.7} padding={{ right: 0, left: 0 }} tickLine={false} axisLine={false} dataKey="day" />
                        <YAxis domain={["dataMin - 10", "dataMax + 10"]} padding={{ top: 0, bottom: 0 }} axisLine={false} hide={true} tickLine={false} tick={false}/>
                        <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} wrapperStyle={{ background: "#FFFFFF", outline: "none" }} />
                        <text x="8%" y="10%" textAnchor="start" dominantBaseline="middle" fill="#FFFFFF" style={{ fontSize: 16, fontWeight: 500, opacity: 0.5 }}>
                            Durée moyenne des
                        </text>
                        <text x="8%" y="18%" textAnchor="start" dominantBaseline="middle" fill="#FFFFFF" style={{ fontSize: 16, fontWeight: 500, opacity: 0.5, }}>
                            sessions
                        </text>
                        <Line type="natural" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2} opacity={0.7} dot={false} activeDot={{ r: 4 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

export default dureeSession;