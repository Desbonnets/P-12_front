import { MockDataActivity, MockDataAverageSessions, MockDataPerformance, MockDataUser } from "../mock/MockData";
import { fetchData } from "./fetch";
/**
 * Permet de récupérer le user avec son id grace a une requete api
 * @param {Integer} userId 
 * @param {Boolean} isApi 
 * @returns {any} Retourne la reponse de l'api
 */
export async function getUserData(userId, isApi) {
  const response = isApi ? await fetchData(`http://localhost:3000/user/${userId}`) : MockDataUser(userId);
  return response;
}

/**
 * Permet de récupérer l'activité du user avec son id grace a une requete api
 * @param {Integer} userId 
 * @param {Boolean} isApi 
 * @returns {any} Retourne la reponse de l'api
 */
export async function getUserActivityData(userId, isApi) {

  const response = isApi ? await fetchData(`http://localhost:3000/user/${userId}/activity`) : MockDataActivity(userId);
  return response;
}

/**
 * Permet de récupérer la moyenne des sessions du user avec son id grace a une requete api
 * @param {Integer} userId 
 * @param {Boolean} isApi 
 * @returns {any} Retourne la reponse de l'api
 */
export async function getUserSessionData(userId, isApi) {

  const response = isApi ? await fetchData(`http://localhost:3000/user/${userId}/average-sessions`) : MockDataAverageSessions(userId);
  return response;
}

/**
 * Permet de récupérer les performances du user avec son id grace a une requete api
 * @param {Integer} userId 
 * @param {Boolean} isApi 
 * @returns {any} Retourne la reponse de l'api
 */
export async function getUserPerformanceData(userId, isApi) {

  const response = isApi ? await fetchData(`http://localhost:3000/user/${userId}/performance`) : MockDataPerformance(userId);
  return response;
}