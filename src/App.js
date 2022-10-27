import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
<<<<<<< HEAD
=======
// import Meals from './pages/Meals';
// import Drinks from './pages/Drinks';
>>>>>>> 327ff9e2533f34cc0cd5f4f11708e85ebf734a19
import RecipeDetails from './pages/RecipeDetails';
import drinkInProgress from './pages/drinkInProgress';
import mealsInProgress from './pages/mealsInProgress';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Recipes from './pages/Recipes';
import ProfilePage from './pages/ProfilePage';
<<<<<<< HEAD
import AppProvider from './context/AppProvider';
=======
import Recipes from './components/Recipes';
>>>>>>> 327ff9e2533f34cc0cd5f4f11708e85ebf734a19

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AppProvider>
          <Route exact path="/" component={ Login } />
          <Route exact path="/meals" component={ Recipes } />
          <Route exact path="/drinks" component={ Recipes } />
          <Route exact path="/meals/:id" component={ RecipeDetails } />
          <Route exact path="/drinks/:id" component={ RecipeDetails } />
          <Route exact path="/drinks/:id/in-progress" component={ drinkInProgress } />
          <Route exact path="/meals/:id/in-progress" component={ mealsInProgress } />
          <Route exact path="/profile" component={ ProfilePage } />
          <Route exact path="/done-recipes" component={ DoneRecipes } />
          <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
        </AppProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
