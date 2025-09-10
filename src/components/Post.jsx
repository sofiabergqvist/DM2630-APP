import '../index.css'
import post1 from '../assets/POST 1.png'
import post2 from '../assets/POST 2.png'
import post3 from '../assets/POST 3.png'
import post4 from '../assets/POST 4.png'
import post5 from '../assets/POST 5.png'
import Timer from './Timer.jsx'
import Input from './Input.jsx'
import { useState } from 'react'
import Tags from './tags.jsx'

function Post ({setIsGameStarted}) {

    const posts = [post1, post2, post3, post4, post5]

    const [currentPost, setCurrentPost] = useState(0); 
    const [timeLeft, setTimeLeft] = useState(30); // start at 30 sec
    const [isPosted, setIsPosted] = useState(false);
    const [tags, setTags] = useState([]) // storage for tags from user input

    function resetGame () {
        setIsGameStarted(false);
    }

    function nextPost () {
        if(currentPost < 4) {
            setCurrentPost(currentPost+1);
            setIsPosted(false);
            setTimeLeft(60);
        }
    }
    
    return (
        <div>
            {isPosted ? (
                <Tags
                    tags={tags}
                    currentPost={currentPost}
                    resetGame={resetGame}
                    nextPost={nextPost}
                />
            ) : (
                <div className='app-container'>
                    <h2>
                        Post {currentPost+1}
                    </h2>
                    <div className='card-container'>
                        <img src={posts[currentPost]} alt={'POST 1' + currentPost + 1}/>
                    </div>
                    <div className='timer-and-input'>
                        <div className='timer-container'> 
                            <Timer 
                                timeLeft={timeLeft}
                                setTimeLeft={setTimeLeft}
                            />
                        </div>
                        <div className='input-container'>
                            <Input 
                                timeLeft={timeLeft}
                                setIsPosted={setIsPosted}
                                setTags={setTags}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>     
    )
}

export default Post