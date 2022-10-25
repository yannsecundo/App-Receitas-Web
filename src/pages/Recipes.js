import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import ResultsByCategory from '../components/ResultsByCategory';
import AppContext from '../context/AppContext';

function Recipes() {
  const {
    title,
    recipe,
    setTitle,
    categoryClicked,
  } = useContext(AppContext);

  useEffect(() => {
    setTitle('meals');
  }, [setTitle]);

  return (
    <div>
      <Header search="true" />
      <h1 data-testId="page-title">
        {
          (title === 'meals') ? 'Meals' : 'Drinks'
        }
      </h1>
      {
        categoryClicked
          ? <ResultsByCategory />
          : (
            <section>
              {
                recipe !== null && title === 'drinks'
          && recipe.map((_recipe, index) => (
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
                recipe !== null && title === 'meals'
          && recipe.map((_recipe, index) => (
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
