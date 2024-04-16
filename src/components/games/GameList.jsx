import { useState, useEffect } from "react";
import { getGames } from "../services/gameService.jsx";
import { Link } from "react-router-dom";

export const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // fetch call to get all games
    // reach out to api to get games collection
    // .then pass result promise into setGames
    getGames().then(setGames);
  }, []);
  return (
    <>
      <section>
        <ul>
          {games.map((game) => (
            <li key={game.id}>
              <Link to={`/games/${game.id}`}>{game.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
