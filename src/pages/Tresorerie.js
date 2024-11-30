import AfficherTreso from '../components/AfficherTreso/AfficherTreso';
import NavBar from '../components/NavBar/NavBar';

function Tresorerie({setPage}) {

    return (
      <div>
        <header>
          <NavBar setPage={setPage} />
        </header>
        <main>
            <h1>Tresorerie</h1>
            <AfficherTreso/>
            <button onClick={() => setPage('Ventes')}>Ventes</button> 
        </main>
        <footer>
        </footer>
      </div>
    );
  }
  
  
  export default Tresorerie;