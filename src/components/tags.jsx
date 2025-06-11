import '../index.css'

function Tags({tags, currentPost, resetGame, nextPost}) {  
    
    const result = tags.map((tag) => <li>{tag}</li>);

    function goToNext() {
        if(currentPost < 4) {
            nextPost();
        } else {
            resetGame();
        }
    }

    return(
        <div className='app-container'>
            <h2>Your tags</h2>
            <div className='result-tags'>
                <ul>
                {result}
                </ul>
            </div>
            <div className='post-button-container'>
                <button onClick={goToNext}>
                    {currentPost < 4 ? 'Next' : 'Back to start'}
                </button>
            </div>
        </div>
    );
}

export default Tags