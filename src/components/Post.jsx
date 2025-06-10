import '../index.css'
import post1 from '../assets/POST 1.png'
import Timer from './Timer.jsx'
import Input from './Input.jsx'
import { useState } from 'react'
import Tags from './tags.jsx'

function Post () {

    const current_post = 1;

    const [timeLeft, setTimeLeft] = useState(10); // start at 60 sec
    const [isPosted, setIsPosted] = useState(false);
    const [tags, setTags] = useState([]) // storage for tags from user input

    if(isPosted) {
        return <Tags
            tags={tags}
        />
    }
    
    return (
        <div className='app-container'>
            <h2>
                Post {current_post}
            </h2>
            <div className='card-container'>
                <img src={post1} alt='POST 1'/>
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
    )

}

export default Post