import './index.css'
import { useState } from 'react'
import Post from './components/Post.jsx'

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  function goToGame() {
    setIsGameStarted(true);
  }

  return (
    <div>
        {isGameStarted ? (
          <Post
            setIsGameStarted={setIsGameStarted}
          />
        ) : (
          <div className='app-container'>
            <h1>Welcome to Alternate Realities</h1>
            <p className='info-text'>
              This project aims to explore part of the seams of recommendations in social media.               
            </p> 
            <p className='info-text'>
              It is presented as a game, where you will get to see made-up social media posts, and
              your job is to come up with tags to describe each post (in addition to those
              that may already be presented in the post caption). 
            </p>
            <p className='info-text'>
              Your friend will see the same set of posts, and should also come up with tags to describe them. 
              You will have 60 seconds to generate as many tags as possible for the post you are currently seeing, 
              and then you can each post your set of tags.
            </p>
            <p className='info-text'>
               Once posted, all your tags will be presented to you, and you can compare your set of 
               tags with that of your friend. Are you living in alternate realities? 
            </p>
            <div className='start-button-container'>
              <button onClick={goToGame}>Start</button>
            </div>
          </div>
        )}
    </div>
    
  )
}

export default App
