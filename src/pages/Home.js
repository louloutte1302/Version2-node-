import React, { useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import Evenement from '../components/Evenement/Evenement';
import './Home.css';

function Home({ setPage }) {
    const [events] = useState([
        { title: 'Calabar', description: 'Les Ventes du Calabar' },
    ]);

   
    return ( 
        <div className = "home-container">
        <header>
        <NavBar setPage = { setPage }/> 
        </header> 
        <main><h1 > Bienvenue sur la page d 'accueil</h1> 
        
        <div className="alert-box">ATTENTION : PLUS QUE 2 DELIRIUM</div>
        
        <div className = "home-main" >
        <div className="button-container">
    <div className="bouton-en-colonne">
        <button onClick={() => setPage('Stocks')} className="nav-button" id="stockage">Stocks</button>
        <button onClick={() => setPage('Tresorerie')} className="nav-button" id="tresorerie">Trésorerie</button>
        <button onClick={() => setPage('Statistiques')} className="nav-button" id="statistiques">Statistiques</button>
    </div>
</div>
            <Evenement events={events}  setPage={setPage} />
        </div> 
        </main> 
        <footer > All Rights Reserved - BDE ENSC © </footer> 
        </div>
    );
}

export default Home;