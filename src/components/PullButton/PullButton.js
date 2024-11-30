import React from 'react';
import './PullButton.css';
import { getOne, putOne } from '../../services/api';

function PullButton({ index, onStockUpdated }) {
  function Retirer(index) {
    getOne(index)
      .then(response => {
        const formatedNombre = parseInt(response.values[0], 10);
        const nouveauNombre = formatedNombre - 1;

        if (nouveauNombre < 0) {
          alert("Stock insuffisant !");
          return;
        }

        if (localStorage.getItem('tokenLocal') === null) {
          alert("Vous n'êtes pas connecté !");
        } else {
          putOne(nouveauNombre, index, localStorage.getItem('tokenLocal'))
            .then(() => {
              console.log("Retrait bien effectué !");
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
      <button onClick={() => Retirer(index)}>Enlever</button>
    </div>
  );
}

export default PullButton;
