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

function Dashboard() {

    const { id } = useParams();
    const { api } = useContext(ApiContext);
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {

        const fetchData = async () => {
        try {
            const user = await userData(id, api);
            const activity = await activityData(id, api);
            const averageSession = await averageData(id, api);
            const performance = await performanceData(id, api);
            setData({ user, activity, averageSession, performance });
            setIsLoading(false);
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la récupération des données :', error);
            navigate("/Error");
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
                <li>Communauté</li>
                <li></li>
            </ul>
            </nav>
            <nav className='sidebar' >
            <ul>
                <li><div className='icon'><img src='../images/meditation.svg' alt='meditation' /></div></li>
                <li><div className='icon'><img src='../images/natation.svg' alt='natation' /></div></li>
                <li><div className='icon'><img src='../images/cyclisme.svg' alt='cyclisme' /></div></li>
                <li><div className='icon'><img src='../images/haltere.svg' alt='haltère' /></div></li>
            </ul>
            <small className='copyright'>Copyright, SportSee 2020</small>
            </nav>
        </header>
        {isLoading ? (
        "Chargement de la page en cours... "
      ) : (
        <main className='content'>
            <h1>Bonjour <span className='color'>{data.user.firstName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <div style={{ display: 'flex', flexDirection: 'row', columnGap: '30px', rowGap: '30px', height: '65.5%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', columnGap: '30px', rowGap: '30px', maxHeight: '611px' }}>
                    <Activity data={data.activity.sessions} />
                    <div style={{ display: 'flex', flexDirection: 'row', columnGap: '30px', rowGap: '30px', height: '43.05%' }}>
                        <DureeSession data={data.averageSession.sessions} />
                        <PerformanceGraph data={data.performance} />
                        <Score data={data.user.todayScore} />
                    </div>
                </div>
                <div>
                    <ActivityCard name="Calories" unit="kCal" icon={'../images/energy.svg'} data={data.user.keyData.calorieCount} />
                    <ActivityCard name="Protéines" unit="g" icon={'../images/chicken.svg'} data={data.user.keyData.proteinCount} />
                    <ActivityCard name="Glucides" unit="g" icon={'../images/apple.svg'} data={data.user.keyData.carbohydrateCount} />
                    <ActivityCard name="Lipides" unit="g" icon={'../images/cheeseburger.svg'} data={data.user.keyData.lipidCount} />
                </div>
            </div>
        </main>)}
        </div>
    );
}

export default Dashboard;
