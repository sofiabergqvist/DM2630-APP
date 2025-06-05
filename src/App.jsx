import './index.css'
import './components/Card'
import { useState } from 'react'

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  function beginGame() {
    console.log("Button was clicked!");
    setIsGameStarted(true);
  }

  if(isGameStarted) {
    return <Card />
  }

  return (
    <div className='app-container'>
      <h1>Welcome to Alternate Realities</h1>
      <p className='info-text'>Information about the game goes here.</p>
      <div className='start-buttons'>
          <button  onClick={beginGame}>Ready to begin?</button>
      </div>     
    </div>
  )
}

export default App
