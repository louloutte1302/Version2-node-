import React from 'react';
import { getOne, putOne } from '../../services/api';

function SaleButton({ index, onStockUpdated }) {
  const handleSale = () => {
    getOne(index)
      .then(response => {
        const currentStock = parseInt(response.values[0], 10);
        const nouveauStock = currentStock - 1;

        if (nouveauStock < 0) {
          alert("Stock insuffisant");
          return;
        }

        putOne(nouveauStock, index, localStorage.getItem('tokenLocal'))
          .then(() => {
            console.log("La vente a marché !");
            onStockUpdated(); // Appeler la mise à jour du stock dans le parent
          })
          .catch(error => {
            console.error("Erreur mise à jour du stock:", error);
          });
      })
      .catch(error => {
        console.error("Erreur pour récupération stock:", error);
      });
  };

  return <button onClick={handleSale}>Vendre</button>;
}

export default SaleButton;
