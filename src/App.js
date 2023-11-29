import React, { useState, useEffect } from 'react';
import { fetchUserData, fetchUserActivityData, fetchUserSessionData, fetchUserPerformanceData } from './api';
import { MockDataUser, MockDataActivity, MockDataAverageSessions, MockDataPerformance } from './MockData';
import logo from './logo.svg';
import './App.css';
import ActivityCard from './components/ActivityCard';
import Activity from'./components/activity';
import DureeSession from './components/dureeSession';
import Performance from './components/performance';
import Score from './components/score';

function App() {

  const [userData, setUserData] = useState(null);
  const [userActivityData, setUserActivityData] = useState(null);
  const [userSessionData, setUserSessionData] = useState(null);
  const [userPerformanceData, setUserPerformanceData] = useState(null);

  useEffect(() => {
    const userId = 12;

    const fetchData = async () => {
      try {
        const data = await fetchUserData(userId);
        setUserData(data);
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des données :', error);
      }
      try {
        const data = await fetchUserActivityData(userId);
        setUserActivityData(data);
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des données :', error);
      }
      try {
        const data = await fetchUserSessionData(userId);
        setUserSessionData(data);
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des données :', error);
      }
      try {
        const data = await fetchUserPerformanceData(userId);
        setUserPerformanceData(data);
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des données :', error);
      }
    };

    fetchData();
  }, []);

  let user = MockDataUser().data;
  // if(userData !== null){
  //   user = userData.data
  // }

  let userActivity = MockDataActivity().data;
  // if(userActivityData !== null){
  //   userActivity = userActivityData.data
  // }

  let userSession =MockDataAverageSessions().data;
  // if(userSessionData !== null){
  //   userSession = userSessionData.data
  // }

  let userPerformance = MockDataPerformance().data;
  // if(userPerformanceData !== null){
  //   userPerformance = userPerformanceData.data
  // }
  
  return (
    <div>
      <header className='wrapper'>
        <nav className='horizontal' >
          <ul>
            <li><img src={logo} alt="logo" /></li>
            <li>Accueil</li>
            <li>Profil</li>
            <li>Réglages</li>
            <li>Communauté</li>
            <li></li>
          </ul>
        </nav>
        <nav className='sidebar' >
          <ul>
            <li><div className='icon'><img src='images/meditation.svg' alt='meditation'/></div></li>
            <li><div className='icon'><img src='images/natation.svg' alt='natation'/></div></li>
            <li><div className='icon'><img src='images/cyclisme.svg' alt='cyclisme'/></div></li>
            <li><div className='icon'><img src='images/haltere.svg' alt='haltère'/></div></li>
          </ul>
          <small className='copyright'>Copyright, SportSee 2020</small>
        </nav>
      </header>
      <main className='content'>
        <h1>Bonjour <span className='color'>{ user !== undefined ? user.userInfos.firstName : '' }</span></h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        <div style={{display: 'flex', flexDirection: 'row', columnGap: '30px', rowGap: '30px'}}>
          <div style={{display: 'flex', flexDirection: 'column', columnGap: '30px', rowGap: '30px'}}>
            <Activity data={ userActivity !== undefined ? userActivity.sessions : '' } />
            <div style={{display: 'flex', flexDirection: 'row', columnGap: '30px', rowGap: '30px'}}>
              <DureeSession data={userSession !== undefined ? userSession.sessions : ''} />
              <Performance data={userPerformance !== undefined ? userPerformance : ''} />
              <Score data={ user !== undefined ? user.todayScore : '' } />
            </div>
          </div>
          <div>
            <ActivityCard
              name="Calories"
              unit="kCal"
              icon={'images/energy.svg'}
              data={user.keyData.calorieCount}
            />
            <ActivityCard
              name="Protéines"
              unit="g"
              icon={'images/chicken.svg'}
              data={user.keyData.proteinCount}
            />
            <ActivityCard
              name="Glucides"
              unit="g"
              icon={'images/apple.svg'}
              data={user.keyData.carbohydrateCount}
            />
            <ActivityCard
              name="Lipides"
              unit="g"
              icon={'images/cheeseburger.svg'}
              data={user.keyData.lipidCount}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
