import React, { useState} from 'react';
import './App.css';
import Home from './pages/Home';
import Stocks from './pages/Stocks';
import Statistiques from './pages/Statistiques';
import Tresorerie from './pages/Tresorerie';
import Ventes from './pages/Ventes';


function App() {
    const [page, setPage] = useState('Home');
    return (
        <div>
            {page === 'Home' && <Home setPage={setPage} />}
            {page === 'Stocks' && <Stocks setPage={setPage} />}
            {page === 'Statistiques' && <Statistiques setPage={setPage} />}
            {page === 'Tresorerie' && <Tresorerie setPage={setPage} />}
            {page === 'Ventes' && <Ventes setPage={setPage} />} 
        </div>
    );
}

export default App;