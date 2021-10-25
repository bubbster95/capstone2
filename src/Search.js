import React, {useState} from 'react';


function Search({ getResults, results }) {
    let [value, setValue] = useState('')
    let keys = Object.keys(results)
    let handleChange = (e) => {
        setValue(e.target.value)
    }
    async function handleSubmit(e) {
        e.preventDefault()
        getResults(value)
    }
    return (
        <div>
            <input placeholder={`Spell: Example "fireball" `} onChange={(e) => handleChange(e)}/>
            <button onClick={(e) => handleSubmit(e)}>Submit</button>

            {(results === '') ? <div> </div>: <div>{keys.map(key => {
                return <div className="info-block" key={key}>
                    { (typeof results[key] === 'string') ?
                        <div><h3>{key}:</h3> <p>{results[key]}</p> </div>: '' }
                </div>
            })}</div>}
        </div>
    );
};

export default Search;