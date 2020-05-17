import React, { useState } from 'react'
import './App.css'
import db from './results.json';
import face from './meow.jpg'
import TinderCard from './Components/TinderCard'

// console.log(db)

function App () {
  const characters = db
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
      <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
      <h1>Maybnb</h1>
      <div className='cardContainer'>
        {characters.map((character) =>
          <TinderCard className='swipe' key={character.header} onSwipe={(dir) => swiped(dir, character.header)} onCardLeftScreen={() => outOfFrame(character.header)}>
            <div style={{ backgroundImage: `url(${character.url}? ${character.url}: ${face}})` }} className='card'>
              <h3>{character.header}</h3>
            </div>
          </TinderCard>
        )}
      </div>
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
    </div>
  )
}

export default App