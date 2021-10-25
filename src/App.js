import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from "react-router-dom";

import React, {useState} from 'react';

import NavBar from './Nav';
import Home from './Home'
import Search from './Search';

import API from './Api'

function App() {
  let [results, setResults] = useState({})

  async function getResults(search) {
    let freshResults = await API.getResults(search)
    setResults(freshResults)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            
            <Route exact path='/names'>
              <Search getResults={getResults} results={results} />
            </Route>

          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
