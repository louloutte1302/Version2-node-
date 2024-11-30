import React, { useState, useEffect } from 'react';
import { getBiere } from '../services/api';
import AddButton from '../components/AddButton/AddButton';
import PullButton from '../components/PullButton/PullButton';
import NavBar from '../components/NavBar/NavBar';

function Stocks({ setPage }) {
  const [bieres, setBieres] = useState([]); // affcihage dynamique des bières lorsqu'on appuie sur enlever ou ajouter

  const fetchBieres = () => {
    getBiere()
      .then(data => {
        if (data !== null) {
          setBieres(data.values);
        }
      })
      .catch(err => {
        console.error("Erreur lors de la récupération des bières:", err);
      });
  };

  useEffect(() => {
    fetchBieres();
  }, []);

  return (
    <div>
      <header>
        <NavBar setPage={setPage} />
      </header>
      <h1>Stocks</h1>
      <table border="1">
        <thead>
          <tr>
            {bieres.length > 0 && bieres[0].map((header, index) => (
              <th key={index}>{header}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bieres.length > 1 && bieres.slice(1).map((biere, rowIndex) => (
            <tr key={rowIndex}>
              {biere.map((item, colIndex) => (
                <td key={colIndex}>{item}</td>
              ))}
              <td>
                <AddButton index={rowIndex + 2} onStockUpdated={fetchBieres} />
                <PullButton index={rowIndex + 2} onStockUpdated={fetchBieres} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Stocks;
