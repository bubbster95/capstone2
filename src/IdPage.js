import React from 'react';
import Search from './Search'

function IdPage({getResults}) {
    return (
        <div>
            <h1>Search By Id</h1>
            <Search param='id' getResults={getResults} />
        </div>
    );
};

export default IdPage;