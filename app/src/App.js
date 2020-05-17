import React, { useState } from 'react'
import './App.css'
import TinderCard from './Components/TinderCard'
import Logo from './logo.gif';
import db from './results.json'

// console.log(db)

function App () {
  const characters = db;
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div>
      <div className='headerDiv'>
        <img src={Logo} alt='logo'/>
      </div>
      <div className='cardContainer'>
        {characters.map((character) =>
          <TinderCard className='swipe' key={character.header} onSwipe={(dir) => swiped(dir, character.header)} onCardLeftScreen={() => outOfFrame(character.header)}>
            <div style={{ backgroundImage: `url(${character.image})`}} className='card'>
              {/* <span className="hellur"> */}
              <h3>{character.header}</h3>
              {/* <p>{character.description}</p> */}
              {/* </span> */}
            </div>
          </TinderCard>
        )}
      </div>
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
    </div>
  )
}

export default App