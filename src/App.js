import React from 'react'
import Home from './Home'
import About from './About'
import Nav from './Nav'
import {  Route ,Switch } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div className="App">
<Switch>
      <Nav />
      
      <Route path='/about'><About /></Route>
      <Route path='/' exact='true'><Home /></Route>
      </Switch>

    </div>
  );
}

export default App;
