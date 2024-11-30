import React, { useState, useEffect } from 'react';
import './AfficherStock.css';  
import { getBiere } from '../../services/api'; 
import AddButton from '../AddButton/AddButton';
import PullButton from '../PullButton/PullButton';

function AfficherStock() {
  const [bieres, setBieres] = useState([]);
  
  useEffect(() => {
    getBiere()
      .then(data => {
        if (data!==null) {
          setBieres(data.values);
        }
      })
      .catch(err => {
        console.error("Erreur", err);
      });
  }, []);

  return (
    <div>
      <h2>Les Stocks actuels</h2>
      <div className="table-container">
        {bieres.length > 1 && bieres.slice(1).map((biere, rowIndex) => (
          <div className="card" key={rowIndex}>
            <h3>{biere[0]}</h3>
            <div className="buttons">
              <AddButton index={rowIndex + 2} />
              <PullButton index={rowIndex + 2} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AfficherStock;
