import React, { useState, useEffect } from 'react';
import { getBiere } from '../services/api';
import SaleButton from '../components/SaleButton/SaleButton';
import NavBar from '../components/NavBar/NavBar';
import './Ventes.css';


function Ventes({ setPage }) {
  const [bieres, setBieres] = useState([]);
  const [showTable, setShowTable] = useState(false); // afficher ou cacher le tableau

  const fetchBieres = () => {
    getBiere()
      .then(data => {
        if (data !== null) {
          setBieres(data.values);
        }
      })
      .catch(err => {
        console.error("ça marche pas quand on récup les bieres:", err);
      });
  };

  useEffect(() => {
    fetchBieres();
  }, []);

  return (
    <div >
      <header>
        <NavBar setPage={setPage} />
      </header>
      <h1>Ventes</h1>
      {/* Bouton pour afficher/masquer le tableau */}
      <button className="afficher-produit" onClick={() => setShowTable(!showTable)}>
        {showTable ? "Masquer les bières" : "Afficher les bières"}
      </button>
      {/* Affichage conditionnel du tableau */}
      {showTable && (
        <table className="table-stock" border="1">
          <thead>
            <tr>
              {bieres.length > 0 && bieres[0].map((header, index) => (
                <th key={index}>{header}</th>
              ))}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bieres.length > 1 && bieres.slice(1).map((biere, rowIndex) => (
              <tr key={rowIndex}>
                {biere.map((item, colIndex) => (
                  <td key={colIndex}>{item}</td>
                ))}
                <td>
                  <SaleButton index={rowIndex + 2} onStockUpdated={fetchBieres} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Ventes;
