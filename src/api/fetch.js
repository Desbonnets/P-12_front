/**
 * fetch data
 * @param {String} url 
 * @returns {promise} data or error
 */

export async function fetchData (url) {
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data
    } catch (error){
        throw new Error('Erreur appel api : '+error);
    }
}