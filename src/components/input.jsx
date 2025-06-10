import '../index.css'
import { useState } from 'react'

function Input ({timeLeft, setIsPosted, setTags}) {

    const [text, setText] = useState("");       // textarea value 

    function cleanTags (res) {
        res = res.filter((res) => res)   // remove empty strings
        .map((res) => res.replace(/[^a-zA-Z0-9]+/g, ""))  // and remove anything but alphanumeric characters 
        .map((res) => "#".concat(res));    // add # in the beginning of every tag
        return res;
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page reload
        //if (text.trim() === "") return; 

        let res = text.split(/\s/g); 

        res = cleanTags(res);
        console.log(res);
        setIsPosted(true);
        setTags(res);
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