import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction'; 
import Game from '../components/Game';
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import GameDetail from '../components/GameDetail';
import { useLocation } from 'react-router-dom';
import { fadeIn, popup } from '../animations';

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(500px,1fr));
  gap: 5rem 3rem;
`;


const Home = () => {
  //Get the Location
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];
  //Fetch Games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //Get that data back
  const { popular, newGames, upcoming, searched } = useSelector(state => state.games);
  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched">
            <Games>
              {searched.map(game => (
                <Game 
                  key={game.id}
                  name={game.name} 
                  released={game.released} 
                  id={game.id} 
                  image={game.background_image} 
                />
              ))}
            </Games>
          </div>
        ) : ''}
        <h2>Upcoming Games</h2>
          <Games>
            {upcoming.map(game => (
              <Game 
                key={game.id}
                name={game.name} 
                released={game.released} 
                id={game.id} 
                image={game.background_image} 
              />
            ))}
          </Games>
          <h2>Popular Games</h2>
          <Games>
            {popular.map(game => (
              <Game 
                key={game.id}
                name={game.name} 
                released={game.released} 
                id={game.id} 
                image={game.background_image} 
              />
            ))}
          </Games>
          <h2>New Games</h2>
          <Games>
            {newGames.map(game => (
              <Game 
                key={game.id}
                name={game.name} 
                released={game.released} 
                id={game.id} 
                image={game.background_image} 
              />
            ))}
          </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

export default Home;