import React, { useState } from 'react';
import './Evenement.css';

function Evenement({ events, onAddEvent, setPage }) {
 
  const handleClickEvent = () => { 
console.log('click event');   
    setPage('Ventes');
    console.log('click event');
  };

  return (
    <div className="evenement-container">
      <h2>Événements</h2>
      <ul>
        {events.length > 0 ? (
          events.map((event, index) => (
            <li key={index} className="event-item">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <span>{event.date}</span>
              <button className="see-button" onClick={handleClickEvent}>VENDRE</button>
            </li>
          ))
        ) : (
          <p>Aucun événement</p>
        )}
      </ul>
    </div>
  );
}

export default Evenement;
