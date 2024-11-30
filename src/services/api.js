import config from '../config';
const apiKey = config.API_KEY;
const spreadsheetId = config.SPREADSHEET_ID;

//Fonction pour récupérer tout le stock
export const getBiere = () => {
  return fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Stock!A1:D30?key=${apiKey}`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      },
  }).then(response => {
      if (!response.ok) {
          throw new Error('Erreur');
      }
      return response.json();
  });
};

//Fonction pour récupérer tout le stock
export const getHisto = () => {
  return fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Historique!A1:D30?key=${apiKey}`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      },
  }).then(response => {
      if (!response.ok) {
          throw new Error('Erreur');
      }
      return response.json();
  });
};

export const addBiere = (nom, quantite, prix, accessToken) => {
  const data = JSON.stringify({
    values: [
      [nom, quantite, prix]
    ]
  });

  return fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Stock!A:C:append?valueInputOption=USER_ENTERED`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: data
  }).then(response => {
    if (!response.ok) {
      throw new Error('Erreur lors de l\'ajout de la bière');
    }
    return response.json();
  });
};


export const getOne = (index) => {
  return fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Stock!B${index}?key=${apiKey}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => {
    if (!response.ok) {
      throw new Error('Erreur');
    }
    return response.json();
  });
};


export const putOne = (nombre, index, accessToken) => {
  const data = JSON.stringify({
    values: [
      [nombre]
    ]
  });

  return fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Stock!B${index}?valueInputOption=USER_ENTERED`, {
    method: 'PUT', 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: data
  }).then(response => {
    if (!response.ok) {
      throw new Error('Erreur lors de lajout');
    }
    return response.json();
  });
};


