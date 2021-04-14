import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Error from './Error';
import '../styles/App.css';

const App = () => (
  <div>
    <h1>Meals Catalogue</h1>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={Error} />
    </Switch>
  </div>
);

export default App;
