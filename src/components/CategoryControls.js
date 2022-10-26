import { React, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import AppContext from '../context/AppContext';

function CategoryControls() {
  const {
    category,
    title,
    setCategoryResults,
    categoryClicked,
    setCategoryClicked,
  } = useContext(AppContext);

  // lista as primeiras 12 comidas com base na categoria escolhida
  const handleClick = async ({ target }) => {
    if (title === 'meals') {
      setCategoryClicked(!categoryClicked);
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${target.value}`);
      const data = await response.json();
      const twelve = 12;
      const getTwelveCategoriesResults = data.meals.slice(0, twelve);
      setCategoryResults(getTwelveCategoriesResults);
      console.log(getTwelveCategoriesResults);
      console.log(title);
    }
    // lista os primeiros 12 drinks com base na categoria escolhida
    if (title === 'drinks') {
      setCategoryClicked(!categoryClicked);
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${target.value}`);
      const data = await response.json();
      const twelve = 12;
      const getTwelveCategoriesResults = data.drinks.slice(0, twelve);
      setCategoryResults(getTwelveCategoriesResults);
      console.log(getTwelveCategoriesResults);
    }
  };

  const handleClickCategory = () => {
    setCategoryClicked(false);
  };

  return (
    <div>
      {
        category.map(({ strCategory }) => (
          <button
            type="button"
            key={ strCategory }
            data-testid={ `${strCategory}-category-filter` }
            value={ strCategory }
            onClick={ (event) => handleClick(event) }
          >
            {strCategory}
          </button>
        ))
      }
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ handleClickCategory }
      >
        All
      </button>
    </div>

  );
}

export default withRouter(CategoryControls);
