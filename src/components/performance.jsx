import React, { Component } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis  } from "recharts";

class performance extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { data, kind } = this.props.data;
        
        const NamePerformance = ({ x, y, payload }) => {
            return (
              <text x={x} y={payload.coordinate === -90 ? y+10 : y} textAnchor={ (90 > payload.coordinate && payload.coordinate > -90) ? "start" : (payload.coordinate < -90 ? "end" : "middle") }>
                {kind[payload.value]}
              </text>
            );
          };

        return (
            <div>
                <RadarChart cx={300} cy={250} width={550} height={550} data={data} >
                    <PolarGrid polarRadius={[0, 22.5, 45, 90, 135, 180]} />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} />
                    <PolarAngleAxis dataKey="kind" tick={<NamePerformance />} />
                    <Radar dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
            </div>
        );
    }
}

export default performance;