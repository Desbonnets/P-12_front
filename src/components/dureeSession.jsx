import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

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

        const NameDays = ({ x, y, payload }) => {
            const days = {1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D'};
            return (
              <text x={x} y={y} dy={16} textAnchor="middle">
                {days[payload.value]}
              </text>
            );
          };

        return (
            <div>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                    >
                    <XAxis dataKey="day" tick={<NameDays />}  />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sessionLength" stroke="#000" dot={false} activeDot={{ r: 8 }} />
                </LineChart>
            </div>
        );
    }
}

export default dureeSession;