import React, { useState } from 'react'
import './App.css'
import db from './results.json';
import face from './meow.jpg'
import TinderCard from './Components/TinderCard'

// console.log(db)

function App () {
  const characters = [
    {
      header: 'Casa del Mama',
      url: 'https://images.unsplash.com/photo-1553444862-65de13a9e728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      header: 'Cabin in the woods',
      url: 'https://images.unsplash.com/photo-1550355191-aa8a80b41353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      header: 'Sunset pool',
      url: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      header: 'Green for miles',
      url: 'https://images.unsplash.com/photo-1566754844421-9bc834baf4a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    }

  ]
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
            <div style={{ backgroundImage: `url(${character.url})`}} className='card'>
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