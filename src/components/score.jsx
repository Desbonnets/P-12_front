import React, { Component } from 'react';
import { RadialBarChart, RadialBar, Legend } from "recharts";

/**
 * Permet de faire un graphique (RadialBarChart) du score moyen d'un user
 * @param {Float} data Exemple data= 0.12
 */
class score extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        let {data} = this.props;
        if(data.length < 2 && data.length > 0){
            data.push({"todayScore": 1});
        }
        console.log(data);

        const style = {
            top: 0,
            left: 350,
            lineHeight: "24px"
          };

        return (
            <RadialBarChart width={500} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={data} >
                <RadialBar minAngle={15} background clockWise dataKey="todayScore" />
                <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
            </RadialBarChart>
        );
    }
}

export default score;