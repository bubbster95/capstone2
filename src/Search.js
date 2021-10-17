import React, {useState} from 'react';


function Search({ param, getResults }) {
    let [value, setValue] = useState('')
    let handleChange = (e) => {
        setValue(e.target.value)
    }
    async function handleSubmit(e) {
        e.preventDefault()
        getResults(param, value)
    }
    return (
        <div>
            <input placeholder={`Enter ${param}`} onChange={(e) => handleChange(e)}/>
            <button onClick={(e) => handleSubmit(e)}>Submit</button>
        </div>
    );
};

export default Search;