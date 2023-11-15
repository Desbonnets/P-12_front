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

        return (
            <div>
                <BarChart
                    width={835}
                    height={320}
                    data={data}
                    barGap='8'
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                    >
      <CartesianGrid vertical={false} />
      <XAxis />
      <YAxis type="number" domain={['dataMin - 10', 'dataMax + 10']} />
      <Tooltip />
      <Legend align='right' verticalAlign='top' iconType='circle' iconSize='8' margin={{top: 5,right: 30,left: 20,bottom: 5}} />
      <Bar dataKey="kilogram" name='Poids (kg)' fill="#282D30" />
      <Bar dataKey="calories" name='Calories brûlées (kCal)' fill="#E60000" />
    </BarChart>
            </div>
        );
    }
}

export default activity;