import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';
import ActivityCard from '../components/ActivityCard';
import Activity from '../components/activity';
import DureeSession from '../components/dureeSession';
import PerformanceGraph from '../components/PerformanceGraph';
import Score from '../components/score';
import { useNavigate, useParams } from 'react-router';
import { ApiContext } from '../api/apiContext';
import { activityData, averageData, performanceData, userData } from '../api/providers';
import CardIcon from '../components/CardIcon';

function Dashboard() {

    const { id } = useParams();
    const { api } = useContext(ApiContext);
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {

        const fetchData = async () => {
        try {
            const user = await userData(id, api, navigate);
            const activity = await activityData(id, api, navigate);
            const averageSession = await averageData(id, api, navigate);
            const performance = await performanceData(id, api, navigate);
            if(!user.error || !activity.error || !averageSession.error || !performance.error ){
                setData({ user, activity, averageSession, performance });
                setIsLoading(false);
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la récupération des données :', error);
            // navigate("/Error");
        }
        };

        fetchData();
    }, [navigate, id, api]);

    return (
        <div>
        <header className='wrapper'>
            <nav className='horizontal' >
            <ul>
                <li><img src={logo} alt="logo" /></li>
                <li><Link to={'/'}>Accueil</Link></li>
                <li>Profil</li>
                <li>Réglages</li>
                <li style={{marginRight:'20px'}}>Communauté</li>
            </ul>
            </nav>
            <nav className='sidebar' >
            <ul>
                <li><CardIcon backgroundIcon='#fff' colorIcon='#000' srcIcon='../images/meditation.svg' altIcon='meditation'/></li>
                <li><CardIcon backgroundIcon='#fff' colorIcon='#000' srcIcon='../images/natation.svg' altIcon='natation'/></li>
                <li><CardIcon backgroundIcon='#fff' colorIcon='#000' srcIcon='../images/cyclisme.svg' altIcon='cyclisme'/></li>
                <li><CardIcon backgroundIcon='#fff' colorIcon='#000' srcIcon='../images/haltere.svg' altIcon='haltere'/></li>
                {/* <li><div className='icon'><img src='../images/meditation.svg' alt='meditation' /></div></li>
                <li><div className='icon'><img src='../images/natation.svg' alt='natation' /></div></li>
                <li><div className='icon'><img src='../images/cyclisme.svg' alt='cyclisme' /></div></li>
                <li><div className='icon'><img src='../images/haltere.svg' alt='haltère' /></div></li> */}
            </ul>
            <small className='copyright'>Copyright, SportSee 2020</small>
            </nav>
        </header>
        {isLoading ? (
        "Chargement de la page en cours... "
      ) : (
        <main className='content'>
            <h1 style={{marginTop:0}}>Bonjour <span className='color'>{data.user.firstName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '30px', height: '90%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', maxHeight: '611px', height: '100%', width: '60%' }}>
                    <Activity data={data.activity.sessions} />
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '30px', height: '43.05%' }}>
                        <DureeSession data={data.averageSession.sessions} />
                        <PerformanceGraph data={data.performance} />
                        <Score data={data.user.todayScore} />
                    </div>
                </div>
                <div className='ActivityCards'>
                    <ActivityCard name="Calories" unit="kCal" icon={{ background: 'rgba(255, 0, 0, 0.1)', color: '#FF0000', src: '../images/energy.svg', alt: 'energy' }} data={data.user.keyData.calorieCount} />
                    <ActivityCard name="Protéines" unit="g" icon={{ background: 'rgba(74, 184, 255, 0.1)', color: '#FF0000', src: '../images/chicken.svg', alt: 'chicken' }} data={data.user.keyData.proteinCount} />
                    <ActivityCard name="Glucides" unit="g" icon={{ background: 'rgba(249, 206, 35, 0.1)', color: '#FF0000', src: '../images/apple.svg', alt: 'apple' }} data={data.user.keyData.carbohydrateCount} />
                    <ActivityCard name="Lipides" unit="g" icon={{ background: 'rgba(253, 81, 129, 0.1)', color: '#FF0000', src: '../images/cheeseburger.svg', alt: 'cheeseburger' }} data={data.user.keyData.lipidCount} />
                </div>
            </div>
            {/* <div style={{ display: 'flex', flexDirection: 'row', gap: '30px', height: '90%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', maxHeight: '611px', height: '100%', width: '60%' }}>
                    <Activity data={data.activity.sessions} />
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '30px', height: '43.05%' }}>
                        <DureeSession data={data.averageSession.sessions} />
                        <PerformanceGraph data={data.performance} />
                        <Score data={data.user.todayScore} />
                    </div>
                </div>
                <div className='ActivityCards'>
                    <ActivityCard name="Calories" unit="kCal" icon={{background:'rgba(255, 0, 0, 0.1)', color:'#FF0000', src:'../images/energy.svg', alt:'energy'}} data={data.user.keyData.calorieCount} />
                    <ActivityCard name="Protéines" unit="g" icon={{background:'rgba(74, 184, 255, 0.1)', color:'#FF0000', src:'../images/chicken.svg', alt:'chicken'}} data={data.user.keyData.proteinCount} />
                    <ActivityCard name="Glucides" unit="g" icon={{background:'rgba(249, 206, 35, 0.1)', color:'#FF0000', src:'../images/apple.svg', alt:'apple'}} data={data.user.keyData.carbohydrateCount} />
                    <ActivityCard name="Lipides" unit="g" icon={{background:'rgba(253, 81, 129, 0.1)', color:'#FF0000', src:'../images/cheeseburger.svg', alt:'cheeseburger'}} data={data.user.keyData.lipidCount} />
                </div>
            </div> */}
        </main>)}
        </div>
    );
}

export default Dashboard;
