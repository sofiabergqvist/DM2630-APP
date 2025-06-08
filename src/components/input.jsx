import '../index.css'
import { useState } from 'react'

function Input ({timeLeft}) {

    const [text, setText] = useState("");       // textarea value
    const [posts, setPosts] = useState([]);     // array of submitted posts

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page reload
        if (text.trim() === "") return; 

        setPosts([...posts, text]); 
        setText(""); // clear textarea
        console.log(text);
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea 
                value={text}
                disabled={timeLeft === 0} 
                placeholder='Write your suggested tags here'
                rows={5}
                cols={35}  
                onChange={(e) => setText(e.target.value)} 
            />
            <div className='post-button-container'>
                <button type="submit" disabled={timeLeft!==0}>POST</button>
            </div>
        </form>
        
    )
}

export default Input