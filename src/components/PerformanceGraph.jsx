import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Performance from '../models/Performance';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";

/**
 * Permet de faire un graphique (RadarChart) des types d’activités d'un user
 * @param {Object} data Exemple: data= { kind: { 1: "cardio", 2: "energy" }, data: [{ value: 80, kind: 1 }, { value: 120, kind: 2 }] }
 */
class PerformanceGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { data } = this.props;
        
        return (
            <div className='PerformanceGraph'>
                <ResponsiveContainer minWidth={'100%'} minHeight={'100%'}>
                    <RadarChart outerRadius="58%" innerRadius="5%" data={data.dataPerformance} cx="50%" cy="50%" >
                        <PolarGrid radialLines={false} outerRadius="10%" />
                        <PolarAngleAxis dataKey="kind" stroke={"#fff"} tickLine={false} radius="5%" fontSize={12} strokeWidth={1} axisLine={true} />
                        <Radar name={data.id} dataKey="value" fill="#FF0101" fillOpacity={0.7} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

PerformanceGraph.propTypes = {
    data: PropTypes.instanceOf(Performance).isRequired,
};

export default PerformanceGraph;