import React from 'react';
import Search from './Search'

function NamesPage({getResults}) {
    return (
        <div>
            <h1>Search By Name</h1>
            <Search param='names' getResults={getResults} />
        </div>
    );
};

export default NamesPage;