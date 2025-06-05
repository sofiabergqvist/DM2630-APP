import '../index.css'
import post1 from '../assets/POST 1.png'

function Card() {

    const current_post = 1;

    return (
        <div className='app-container'>
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

export default Card;