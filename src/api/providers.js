import { getUserData, getUserActivityData, getUserSessionData, getUserPerformanceData } from "./api.js";

import User from "../models/User.js";
import Activity from "../models/Activity.js";
import Average from "../models/AverageSession.js";
import Perfomance from "../models/Performance.js";

/**
 * Provid and formatted user data from api or mocked data
 * @param { String } id user id
 * @param { Boolean } [setup] Api state
 * @param { Object } navigate React dom useNavigate()
 * @returns {Object}
 */

export async function userData(id, setup, navigate) {
  const data = await getUserData(id, setup, navigate);
  if(!data.error){
    try {
      const user = new User(data.data);
      return user;
    } catch (error) {
      console.error('erreur sur la modélisation :' + error);
    }
  }else{
    return data;
  }
}

/**
 * Provid and formatted activity data from api or mocked data
 * @param { String } id user id
 * @param { Boolean } [setup] Api state
 * @param { Object } navigate React dom useNavigate()
 * @returns {Object}
 */

export async function activityData(id, setup, navigate) {
  const data = await getUserActivityData(id, setup, navigate);
  if(!data.error){
    try {
      const activity = new Activity(data.data);
      return activity;
    } catch (error) {
      console.error('erreur sur la modélisation :' + error);
    }
  }else{
    return data;
  }
}

/**
 * Provid and formatted average data from api or mocked data
 * @param { String } id user id
 * @param { Boolean } [setup] Api state
 * @param { Object } navigate React dom useNavigate()
 * @returns {Object}
 */

export async function averageData(id, setup, navigate) {
  const data = await getUserSessionData(id, setup, navigate);
  if(!data.error){
    try {
      const average = new Average(data.data);
      return average;
    } catch (error) {
      console.error('erreur sur la modélisation :' + error);
    }
  }else{
    return data;
  }
}

/**
 * Provid formatted performance data
 * @param { String } id user id
 * @param { Boolean } [setup] Api state
 * @param { function } navigate React dom useNavigate()
 * @returns {Object}
 */

export async function performanceData(id, setup, navigate) {
  const data = await getUserPerformanceData(id, setup, navigate);
  if(!data.error){
    try {
      const performance = new Perfomance(data.data);
      return performance;
    } catch (error) {
      console.error('erreur sur la modélisation :' + error);
    }
  }else{
    return data;
  }
}