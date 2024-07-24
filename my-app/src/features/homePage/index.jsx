import './index.css';
import GameCard from './components/GameCard';
import ListedGames from './listedGames'

function HomePage() {
  return (
    <>
      <header className="header">
          <h1>Home Page</h1>
          <p>A small page by Leo</p>
      </header>
      <div className='GameCardContainer'>
        {
          ListedGames.map((game) => (
            <GameCard game={game} key={game.PATH}/>
          ))
        }
      </div>
    </>
  );
}

export default HomePage;