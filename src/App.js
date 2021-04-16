import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import MealList from './containers/meal-list/MealList';
import MealDetails from './containers/meal-details/MealDetails';
import Footer from './components/footer/Footer';
import Error from './components/error/Error';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={MealList} />
          <Route path="/:name" component={MealDetails} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
