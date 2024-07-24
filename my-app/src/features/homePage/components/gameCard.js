import React from 'react'
import { Link } from 'react-router-dom';

// The svg images require width="100%" and height="100%" to scale correctly
function GameCard({game}) {
  return (
    <Link className="link" to={game.PATH}>
      <img alt={game.NAME} src={game.IMAGE} loading="lazy" className="link-img" style={{opacity: 1}}></img>
    </Link>
  );
}

export default GameCard;