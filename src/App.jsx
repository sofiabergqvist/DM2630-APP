import './index.css'
import post1 from './assets/POST 1.png'

function App() {

  const current_post = 1;

  return (
    <div className='app-container'>
      <h1>Welcome to Alternate Realities</h1>
      <p className='info-text'>Information about the game goes here.</p> 
      <hr />  
        <h2>
          Post {current_post}
        </h2>
        <div className='card-container'>
            <img src={post1} alt='POST 1'/>
        </div>
        <div className='input-container'>
            <input />
        </div>
        <div className='post-buttons'>
            <button>POST</button>
        </div>
    </div>
  )
}

export default App
