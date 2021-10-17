import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, Redirect } from "react-router-dom";

import React, {useState} from 'react';

import NavBar from './Nav';
import Home from './Home'
import NamesPage from './NamesPage';
import IdPage from './IdPage';
import CategoryPage from './CategoryPage';
import ResultsPage from './ResultsPage'

import API from './Api'

function App() {
  let [results, setResults] = useState({})

  async function getResults(param, search) {
    let freshResults = await API.getResults(param, search)
    setResults(freshResults)
    Redirect(`/${param}/results`)
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
              <NamesPage getResults={getResults} />
            </Route>
            
            <Route exact path='/category'>
              <CategoryPage  getResults={getResults} />
            </Route>
            
            <Route exact path='/id'>
              <IdPage  getResults={getResults} />
            </Route>

            <Route path='/:param/results'>
              <ResultsPage results={results} />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
