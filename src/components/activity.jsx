import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

/**
 * Permet de faire un graphique (BarChart) de l'activité quotidienne d'un user
 * @param {Array} data Exemple: data= [{ day: "2020-07-01", kilogram: 80, calories: 240 }, { day: "2020-07-02", kilogram: 80, calories: 220 }]
 */
class activity extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        const { data } = this.props;

        const CustomTooltip = ({ active, payload, label }) => {
            if (active && payload && payload.length) {
                return (
                    <div className="activityToolTip">
                        <p>{`${payload[0].value}${payload[0].name = 'Poids (kg)' ? 'kg' : 'kCal'}`}</p>
                        <p>{`${payload[1].value}${payload[0].name = 'Calories brûlées (kCal)' ? 'kCal' : 'kg'}`}</p>
                    </div>
                );
            }
          
            return null;
          };

        return (
            <div className='BarChart'>
                <BarChart width={835} height={320} data={data} barGap='8' margin={{ top: 5, right: 30, left: 20, bottom: 5 }} >
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="day" tickLine={false} tick={{ fill: "#9B9EAC", fontWeight: 500, fontSize: 14 }} tickMargin={14} axisLine={false}/>
                    <YAxis yAxisId="left" orientation="left" dataKey="calories" tickCount={3} hide={true} />
                    <YAxis yAxisId="right" orientation="right" dataKey="kilogram" tickLine={false} tick={{ fill: "#9B9EAC", fontWeight: 500, fontSize: 14 }} tickMargin={45} minTickGap={16} axisLine={false} domain={["dataMin - 2", "dataMax + 1"]} tickCount={3} />
                    <Tooltip content={<CustomTooltip />} wrapperStyle={{ outline: "none" }} />
                    <Legend align={'right'} verticalAlign={'top'} iconType={'circle'} iconSize={8} height={60} formatter={(value) => <span style={{ fontFamily: "roboto", color: "#74798C", fontSize: 14, fontWeight: 500 }}>{value}</span>}/>
                    <Bar dataKey="kilogram" name='Poids (kg)' fill="#282D30" radius={[25, 25, 0, 0]} barSize={7} yAxisId="right"/>
                    <Bar dataKey="calories" name='Calories brûlées (kCal)' fill="#E60000" radius={[3, 3, 0, 0]} barSize={7} yAxisId="left"/>
                    <text y={15} width={147} height={48} textAnchor="start" dominantBaseline="middle" fill="#20253A" style={{ fontWeight: 500, fontSize: 15, fontFamily: "roboto", }}>Activité quotidienne</text>
                </BarChart>
            </div>
        );
    }
}

export default activity;