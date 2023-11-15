export async function fetchUserData(userId) {
  try {
    const response = await fetch(`http://localhost:3000/user/${userId}`);

    if (!response.ok) {
      throw new Error('Erreur sur la requete api du user');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function fetchUserActivityData(userId) {
  try {
    const response = await fetch(`http://localhost:3000/user/${userId}/activity`);

    if (!response.ok) {
      throw new Error('Erreur sur la requete api de l\'activiter');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function fetchUserSessionData(userId) {
  try {
    const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);

    if (!response.ok) {
      throw new Error('Erreur sur la requete api sur la moyenne des sessions');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function fetchUserPerformanceData(userId) {
  try {
    const response = await fetch(`http://localhost:3000/user/${userId}/performance`);

    if (!response.ok) {
      throw new Error('Erreur sur la requete api sur les performances');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}