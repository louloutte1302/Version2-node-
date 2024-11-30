import React from 'react';
import './AddButton.css';
import { getOne, putOne } from '../../services/api';

function AddButton({ index, onStockUpdated }) {
  function Ajouter(index) {
    getOne(index)
      .then(response => {
        const formatedNombre = parseInt(response.values[0], 10);
        const nouveauNombre = formatedNombre + 1;

        if (localStorage.getItem('tokenLocal') === null) {
          alert("Vous n'êtes pas connecté");
        } else {
          putOne(nouveauNombre, index, localStorage.getItem('tokenLocal'))
            .then(() => {
              console.log("Ajout effectué");
              onStockUpdated(); // Recharger le stock
            })
            .catch(error => {
              console.error(`Erreur: ${error.message}`);
            });
        }
      })
      .catch(error => {
        console.error(`Erreur: ${error.message}`);
      });
  }

  return (
    <div>
      <button onClick={() => Ajouter(index)}>Ajouter</button>
    </div>
  );
}

export default AddButton;
