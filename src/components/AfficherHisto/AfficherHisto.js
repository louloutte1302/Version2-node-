import React, { useState, useEffect } from 'react';
import './AfficherHisto.css'
import { getHisto } from '../../services/api';


function AfficherHistorique(){

    const [histo,setHisto]=useState([]);
    useEffect(() => {
        getHisto().then(data => {
            if (data!==null) { 
                setHisto(data.values);
            }
        }).catch(err => {
            console.error("Erreur", err);
        });
    }, []);
    
    return(
        <div>
            <h2>L'historique des ventes</h2>
            <ul>
                {histo.map((row)=>(
                    <li>{row[0]}    {row[1]}    {row[2]}</li>
                ))}
            </ul>
        </div>
    )

}

export default AfficherHistorique