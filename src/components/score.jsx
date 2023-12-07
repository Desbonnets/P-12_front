import React, { Component } from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

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

        const style = {
            top: 0,
            left: 350,
            lineHeight: "24px"
          };

        const tab = [
        {
            scale: 0,
            fill: "transparent",
        },
        {
            scale: 100,
            fill: "transparent",
        },
        {
            scale: data*100,
            fill: "#FF0000",
        },
        ];

        return (
            <div className='ScoreGraph'>
                <h2>Score</h2>
                <div className='contentScore'>
                    <p className='Objectif'>{data*100}%</p>
                    <p className='Comment'>de votre objectif</p>
                </div>
                <ResponsiveContainer>
                    <RadialBarChart 
                    innerRadius="50%"
                    outerRadius="80%"
                    data={tab}
                    startAngle={-280}
                    endAngle={80}
                    barSize={20}
                    >
                        <RadialBar
                            background={false}
                            clockWise={true}
                            dataKey="scale"
                            cornerRadius={25}
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

export default score;