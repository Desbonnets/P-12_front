import React, { Component } from 'react';

/**
 * Permet de faire un graphique (BarChart) de l'activité quotidienne d'un user
 * @param {Array} data Exemple: data= [{ day: "2020-07-01", kilogram: 80, calories: 240 }, { day: "2020-07-02", kilogram: 80, calories: 220 }]
 */
class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {

        return (
            <div style={{position: 'relative'}}>
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.8)', zIndex: 1000, }}>
                    <h2 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#7ab1e8' }}>Chargement en cours...</h2>
                </div>
            </div>
        );
    }
}

export default Loading;