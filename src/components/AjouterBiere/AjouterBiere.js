import React, { useState} from 'react';
import './AjouterBiere.css';
import { addBiere } from '../../services/api';


function AjouterBiere() {
    const [nom, setNom] = useState('');
    const [stock, setStock] = useState('');
    const [prix, setPrix] = useState('');
    const token = localStorage.getItem('tokenLocal');

    function handleAdd(event) {
        event.preventDefault();

        const formatedStock = parseInt(stock, 10);
        const formatedPrix = parseInt(prix, 10);
        if(localStorage.getItem('tokenLocal')===null)
        {
            alert("Vous n'êtes pas connecté !")
        }
        else
        { 
            alert(`Vous allez ajouter\n -Nom : ${nom}\n-Nombre: ${formatedStock}\n-Prix: ${formatedPrix}`);
            addBiere(nom,formatedStock,formatedPrix,token);
        }
    }
    
    return (
    <div>
        <h2>Ajouter une bière</h2>
        <form id="ajoutForm">
            <label htmlFor="nom">Nom :</label>
            <input type="text" id="nom" onChange={(e) => setNom(e.target.value)} required />
            <br />
            <label htmlFor="stock">Nombre en stock :</label>
            <input type="number" id="stock" onChange={(e) => setStock(e.target.value)} required />
            <br />
            <label htmlFor="prix">Prix à l'unité :</label>
            <input type="number" id="prix" onChange={(e) => setPrix(e.target.value)} required />
            <br />
            <input type="submit" value="Ajouter" onClick={handleAdd}/>
        </form>
    </div>
  );
}

export default AjouterBiere;