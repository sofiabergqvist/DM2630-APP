import '../index.css'

function Tags({tags, currentPost, resetGame, nextPost}) {  
    
    const result = tags.map((tag) => <li>{tag}</li>);

    function goToNext() {
        if(currentPost < 3) {
            nextPost();
        } else {
            resetGame();
        }
    }

    return(
        <div className='app-container'>
            <h2>Your tags</h2>
            {
                tags.length > 0 ? (
                    <div className='result-tags'>
                        <ul>
                        {result}
                        </ul>
                    </div>
                ) : (
                    <p className='info-text'>
                        Oops, no tags here...
                    </p>
                )
            }
            <div className='post-button-container'>
                <button onClick={goToNext}>
                    {currentPost < 3 ? 'Next' : 'Back to start'}
                </button>
            </div>
        </div>
    );
}

export default Tags