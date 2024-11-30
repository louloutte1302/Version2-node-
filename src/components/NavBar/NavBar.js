import React from 'react';
import './NavBar.css';
import NavLink from '../NavLink/NavLink';
import Connexion from '../Connexion/Connexion';

function NavBar({setPage}) {
    return (
        <nav className="navbar">
            <img src='/img/Logo Blanc.png' id="logo"></img>
            <NavLink onClick={() => setPage('Home')} text="Accueil" />
            <NavLink onClick={() => setPage('Stocks')} text="Stocks" />
            <NavLink onClick={() => setPage('Statistiques')} text="Statistiques" />
            <NavLink onClick={() => setPage('Tresorerie')} text="Trésorerie" />
            {/* <NavLink onClick={()=> setPage('Ventes') } text='Ventes'/> */}
            <Connexion/>
        </nav>
    );
}
export default NavBar;