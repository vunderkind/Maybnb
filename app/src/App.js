import React, { useState } from 'react'
import './App.css'
import TinderCard from './Components/TinderCard'
import Logo from './logo.gif';

// console.log(db)

function App () {
  const characters = [
    {
      header: 'Casa del Mama',
      url: 'https://images.unsplash.com/photo-1553444862-65de13a9e728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      description: "When I heard the learn'd astronomer, when the proofs and figures were ranged in columns before me, when I was shown the charts and diagrams, to add, divide and measure them."
    },
    {
      header: 'Cabin in the woods',
      url: 'https://images.unsplash.com/photo-1550355191-aa8a80b41353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      description: "When I heard the learn'd astronomer, when the proofs and figures were ranged in columns before me, when I was shown the charts and diagrams, to add, divide and measure them."
    },
    {
      header: 'Sunset pool',
      url: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      description: "When I heard the learn'd astronomer, when the proofs and figures were ranged in columns before me, when I was shown the charts and diagrams, to add, divide and measure them."
    },
    {
      header: 'Green for miles',
      url: 'https://images.unsplash.com/photo-1566754844421-9bc834baf4a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      description: "When I heard the learn'd astronomer, when the proofs and figures were ranged in columns before me, when I was shown the charts and diagrams, to add, divide and measure them."

    },
    {
      header: 'A touch of home',
      url: 'https://images.pexels.com/photos/930004/pexels-photo-930004.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      description: "When I heard the learn'd astronomer, when the proofs and figures were ranged in columns before me, when I was shown the charts and diagrams, to add, divide and measure them."
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
      <div className='headerDiv'>
        <img src={Logo} alt='logo'/>
      </div>
      <div className='cardContainer'>
        {characters.map((character) =>
          <TinderCard className='swipe' key={character.header} onSwipe={(dir) => swiped(dir, character.header)} onCardLeftScreen={() => outOfFrame(character.header)}>
            <div style={{ backgroundImage: `url(${character.url})`}} className='card'>
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