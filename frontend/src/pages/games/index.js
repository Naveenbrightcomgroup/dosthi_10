import React from 'react';
import './style.css';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import Header from "../../components/header";
import game1 from "./tictoktoe/index";



const games = [
  {
    id: 1,
    name: 'TicTokToe',
    backgroundImage: 'ttt.jpg',
    path:'https://poki.com/en/g/tic-tac-toe-3'
    
  },
  {
    id: 2,
    name: 'Subway Surfers',
    backgroundImage: 'SubwaySurfers.jpg',
    path:'https://poki.com/en/g/subway-surfers'
  },
  {
    id: 3,
    name: 'Bubble Shooter',
    backgroundImage: 'BubbleShooter.jpg',
    path:'https://poki.com/en/g/bubble-shooter-lak'
  },
  {
    id: 3,
    name: 'Snake vs Worms',
    backgroundImage: 'Snakes.jpg',
    path:'https://poki.com/en/g/snake-vs-worms'
  },
  {
    id: 3,
    name: 'Fruit Ninja',
    backgroundImage: 'FruitNinja.jpg',
    path:'https://poki.com/en/g/fruit-ninja'
  },
  {
    id: 3,
    name: 'Hills of Steel',
    backgroundImage: 'HillsOfSteel.jpg',
    path:'https://poki.com/en/g/hills-of-steel'
  },
  {
    id: 3,
    name: 'Combat Reloaded',
    backgroundImage: 'combatReloaded.jpg',
    path:'https://poki.com/en/g/combat-reloaded'
  },
  {
    id: 3,
    name: 'Real Cars in City',
    backgroundImage: 'cars.jpg',
    path:'https://poki.com/en/g/real-cars-in-city'
    
  },
  {
    id: 3,
    name: 'Word vs Word',
    backgroundImage: 'word.jpg',
    path:'https://poki.com/en/g/word-vs-word'
  },
  {
    id: 3,
    name: 'Stickman Hook',
    backgroundImage: 'stickman.jpg',
    path:'https://poki.com/en/g/stickman-hook'
  },
  {
    id: 3,
    name: 'Happy Wheels',
    backgroundImage: 'HappyWheels.jpg',
    path:'https://totaljerkface.com/happy_wheels.tjf'
  },
  {
    id: 3,
    name: 'SimplyUp',
    backgroundImage: 'up.jpg',
    path:'https://poki.com/en/g/simplyupio'
  },


  // Add more game objects as needed
];

function Games() {
  return (
    <div className="App">
      
         <Header page = "games" />
         
      <div className="game-cards">
        {games.map((game) => (<div>
          <Link className='cards__item__link' to={game.path} target='_blank'>
          <div key={game.id} className="game-card" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${game.backgroundImage})` }}>
           <div className='title'><p>{game.name}</p></div>
          </div>
          {/* <p>{game.name}</p> */}
          </Link>
          </div>
        ))}
      </div>
     
    </div>
  );
}

export default Games;