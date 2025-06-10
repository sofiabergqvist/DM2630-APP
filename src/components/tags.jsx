import '../index.css'

function Tags({tags}) {  

    const result = tags.map((tag) => <li>{tag}</li>);

    return(
        <div className='app-container'>
            <h2>Your tags</h2>
            <div className='result-tags'>
                <ul>
                {result}
                </ul>
            </div>
        </div>
    );
}

export default Tags