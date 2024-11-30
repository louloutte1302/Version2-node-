import AfficherHistorique from '../components/AfficherHisto/AfficherHisto';
import NavBar from '../components/NavBar/NavBar';

function Statistiques({setPage}) {

  return (
    <div>
      <header>
        <NavBar setPage={setPage} />
      </header>
      <main>
          <h1>Historique</h1>
          <AfficherHistorique/>
      </main>
      <footer>
      </footer>
    </div>
  );
}


export default Statistiques;