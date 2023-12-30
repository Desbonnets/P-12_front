/**
 * fetch data
 * @param {String} url 
 * @param { function }  navigate React dom useNavigate()
 * @returns {promise} data or error
 */

export async function fetchData (url, navigate) {
    
    const response = await fetch(url)
        .then(response => {
            if (!response.ok) {
                // Si le statut n'est pas OK (200-299)
                throw new Error('Déconnexion détectée');
            }
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            // Gestion des erreurs
            console.error('Erreur lors de la requête:', error.message);

            if (error.message === 'Failed to fetch') {
                // Traitez la déconnexion ici
                console.error('Une erreur est sur venue sur l\'API.');
                navigate('/error_500');
                // window.location.href = "/erreur_500";
            }else if (error.message === 'Déconnexion détectée') {
                // Traitez la déconnexion ici
                navigate('/error_404');
                // window.location.href = "/erreur_404";
            }
            return {'error': error.message};
        });
    
    return response;
}