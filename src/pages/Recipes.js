import React, { useContext, useEffect } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import CategoryControls from '../components/CategoryControls';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import ResultsByCategory from '../components/ResultsByCategory';
import AppContext from '../context/AppContext';

function Recipes() {
  const {
    title,
    setTitle,
    recipeList,
    categoryClicked,
  } = useContext(AppContext);

  useEffect(() => {
    const actualPath = window.location.pathname;
    if (actualPath === '/meals') { setTitle('meals'); }
    if (actualPath === '/drinks') { setTitle('drinks'); }
  }, [setTitle]);

  return (
    <div>
      <Header search="true" />
      <h1 data-testId="page-title">
        {
          (title === 'drinks') ? 'Drinks' : 'Meals'
        }
      </h1>
      <CategoryControls />
      {
        categoryClicked
          ? <ResultsByCategory />
          : (
            <section>
              {
                recipeList !== null && title === 'drinks'
          && recipeList.map((_recipe, index) => (
            <Link
              to={ `/${title}/${_recipe.idDrink}` }
              key={ `${index}-recipe-card` }
            >
              <RecipeCard
                index={ index }
                recipe={ _recipe }
                title="drinks"
              />
            </Link>
          ))
              }
              {
                recipeList !== null && title === 'meals'
          && recipeList.map((_recipe, index) => (
            <Link
              to={ `/${title}/${_recipe.idMeal}` }
              key={ `${index}-recipe-card` }
            >
              <RecipeCard
                index={ index }
                recipe={ _recipe }
                title="meals"
              />
            </Link>
          ))
              }
            </section>
          )
      }
      <Footer />
    </div>
  );
}
export default withRouter(Recipes);
