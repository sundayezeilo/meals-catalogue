import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import RecipeList from './containers/recipe-list/RecipeList';
import RecipeDetails from './containers/recipe-details/RecipeDetails';
import Footer from './components/footer/Footer';
import Error from './components/error/Error';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={RecipeList} />
          <Route path="/:name" component={RecipeDetails} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
