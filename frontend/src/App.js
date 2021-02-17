import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import SearchPage from './pages/search-page'
import HomePage from './pages/home-page'

// Using react-router for client-side routing 
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/search-users'>
          <SearchPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
