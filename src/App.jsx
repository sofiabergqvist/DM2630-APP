import './index.css'
import { useState } from 'react'
import Post from './components/Post.jsx'

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  function goToGame() {
    setIsGameStarted(true);
  }

  if(isGameStarted) {
    return <Post/>
  }

  return (
    <div className='app-container'>
      <h1>Welcome to Alternate Realities</h1>
      <p className='info-text'>Information about the game goes here.</p> 
      <div className='start-button-container'>
        <button onClick={goToGame}>Ready to start?</button>
      </div>
    </div>
  )
}

export default App
