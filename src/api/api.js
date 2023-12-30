import { MockDataActivity, MockDataAverageSessions, MockDataPerformance, MockDataUser } from "../mock/MockData";
import { fetchData } from "./fetch";
/**
 * Permet de récupérer le user avec son id grace a une requete api
 * @param {Integer} userId 
 * @param {Boolean} isApi 
 * @param { function } navigate React dom useNavigate()
 * @returns {any} Retourne la reponse de l'api
 */
export async function getUserData(userId, isApi, navigate) {
  const response = isApi ? await fetchData(process.env.REACT_APP_URL_API+`/user/${userId}`, navigate) : MockDataUser(userId);
  return response;
}

/**
 * Permet de récupérer l'activité du user avec son id grace a une requete api
 * @param {Integer} userId 
 * @param {Boolean} isApi 
 * @param { function } navigate React dom useNavigate()
 * @returns {any} Retourne la reponse de l'api
 */
export async function getUserActivityData(userId, isApi, navigate) {

  const response = isApi ? await fetchData(process.env.REACT_APP_URL_API+`/user/${userId}/activity`, navigate) : MockDataActivity(userId);
  return response;
}

/**
 * Permet de récupérer la moyenne des sessions du user avec son id grace a une requete api
 * @param {Integer} userId 
 * @param {Boolean} isApi 
 * @param { function } navigate React dom useNavigate()
 * @returns {any} Retourne la reponse de l'api
 */
export async function getUserSessionData(userId, isApi, navigate) {

  const response = isApi ? await fetchData(process.env.REACT_APP_URL_API+`/user/${userId}/average-sessions`, navigate) : MockDataAverageSessions(userId);
  return response;
}

/**
 * Permet de récupérer les performances du user avec son id grace a une requete api
 * @param {Integer} userId 
 * @param {Boolean} isApi 
 * @param { function } navigate React dom useNavigate()
 * @returns {any} Retourne la reponse de l'api
 */
export async function getUserPerformanceData(userId, isApi, navigate) {

  const response = isApi ? await fetchData(process.env.REACT_APP_URL_API+`/user/${userId}/performance`, navigate) : MockDataPerformance(userId);
  return response;
}