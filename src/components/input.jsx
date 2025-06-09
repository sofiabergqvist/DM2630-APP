import '../index.css'
import { useState } from 'react'

function Input ({timeLeft}) {

    const [text, setText] = useState("");       // textarea value 

    function cleanTags (tags) {
        const cleanedTags = tags.filter((tag) => tag)   // remove empty strings
        .map((tag) => tag.replace(/[^a-zA-Z0-9]+/g, ""))  // and remove anything but alphanumeric characters 
        .map((tag) => "#".concat(tag));    // add # in the beginning of every tag

        console.log(cleanedTags);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page reload
        if (text.trim() === "") return; 

        const tags = text.split(/\s/g); // storage for tags from user input

        console.log(tags);
        cleanTags(tags);
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