import React, { useState, useEffect, useRef } from 'react';

function Connexion() {
    const CLIENT_ID = '716737677018-7tk0b1r6ch6gnq0361ltit8smc908d9r.apps.googleusercontent.com';
    const API_KEY = 'AIzaSyDeIk2vDlkIcWHDtqbmSYWI6ODSE-CAVEA';
    const SCOPES = 'https://www.googleapis.com/auth/spreadsheets';
    const DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';

    const [isAuthorized, setIsAuthorized] = useState(!!localStorage.getItem('tokenLocal'));
    const tokenClientRef = useRef(null);

    useEffect(() => {
        const loadScripts = () => {
            const gapiScript = document.createElement('script');
            gapiScript.src = 'https://apis.google.com/js/api.js';
            gapiScript.onload = () => window.gapi.load('client', initializeGapiClient);
            document.body.appendChild(gapiScript);

            const gisScript = document.createElement('script');
            gisScript.src = 'https://accounts.google.com/gsi/client';
            gisScript.onload = initializeTokenClient;
            document.body.appendChild(gisScript);
        };

        const initializeGapiClient = () => {
            window.gapi.client.init({
                apiKey: API_KEY,
                discoveryDocs: [DISCOVERY_DOC],
            });
        };

        const initializeTokenClient = () => {
            tokenClientRef.current = window.google.accounts.oauth2.initTokenClient({
                client_id: CLIENT_ID,
                scope: SCOPES,
                callback: handleTokenResponse,
                redirect_uri: 'http://localhost:3000/oauth2callback'
            });
        };

        loadScripts();
    }, []);

    const handleTokenResponse = (response) => {
        if (response.error) throw response;
        setIsAuthorized(true);
        const token = window.gapi.client.getToken().access_token;
        localStorage.setItem('tokenLocal', token);
    };

    const handleAuthClick = () => {
        if (!tokenClientRef.current) {
            console.error("Client d'authentification non chargé.");
            return;
        }

        tokenClientRef.current.callback = handleTokenResponse;

        const token = window.gapi.client.getToken();
        tokenClientRef.current.requestAccessToken({ prompt: token ? '' : 'consent' });
    };

    const handleSignoutClick = () => {
        setIsAuthorized(false);
        localStorage.removeItem('tokenLocal');
    };

    return (
        <div>
            {!isAuthorized ? (
                <button onClick={handleAuthClick}>Autoriser</button>
            ) : (
                <button onClick={handleSignoutClick}>Déconnexion</button>
            )}
        </div>
    );
}

export default Connexion;
