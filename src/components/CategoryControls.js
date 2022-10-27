import { React, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import AppContext from '../context/AppContext';
<<<<<<< HEAD
=======
import { meals12recipesApi, drinks12recipesApi } from '../helpers/API';
>>>>>>> 327ff9e2533f34cc0cd5f4f11708e85ebf734a19

function CategoryControls() {
  const {
    category,
    title,
<<<<<<< HEAD
    setCategoryResults,
=======
    setRecipeList,
>>>>>>> 327ff9e2533f34cc0cd5f4f11708e85ebf734a19
    categoryClicked,
    setCategoryClicked,
  } = useContext(AppContext);

  // lista as primeiras 12 comidas com base na categoria escolhida
  const handleClick = async ({ target }) => {
<<<<<<< HEAD
    if (title === 'meals') {
      setCategoryClicked(!categoryClicked);
=======
    if (title === 'Meals') {
      if (target.value === 'All' || categoryClicked === target.value) {
        const data = await meals12recipesApi();
        setRecipeList(data);
        setCategoryClicked(null);
        return;
      }
      setCategoryClicked(target.value);
>>>>>>> 327ff9e2533f34cc0cd5f4f11708e85ebf734a19
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${target.value}`);
      const data = await response.json();
      const twelve = 12;
      const getTwelveCategoriesResults = data.meals.slice(0, twelve);
<<<<<<< HEAD
      setCategoryResults(getTwelveCategoriesResults);
      console.log(getTwelveCategoriesResults);
      console.log(title);
    }
    // lista os primeiros 12 drinks com base na categoria escolhida
    if (title === 'drinks') {
      setCategoryClicked(!categoryClicked);
=======
      setRecipeList(getTwelveCategoriesResults);
    }
    // lista os primeiros 12 drinks com base na categoria escolhida
    if (title === 'Drinks') {
      if (target.value === 'All' || categoryClicked === target.value) {
        const data = await drinks12recipesApi();
        setRecipeList(data);
        setCategoryClicked(null);
        return;
      }
      setCategoryClicked(target.value);
>>>>>>> 327ff9e2533f34cc0cd5f4f11708e85ebf734a19
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${target.value}`);
      const data = await response.json();
      const twelve = 12;
      const getTwelveCategoriesResults = data.drinks.slice(0, twelve);
<<<<<<< HEAD
      setCategoryResults(getTwelveCategoriesResults);
      console.log(getTwelveCategoriesResults);
    }
  };

  const handleClickCategory = () => {
    setCategoryClicked(false);
  };

=======
      setRecipeList(getTwelveCategoriesResults);
    }
  };

>>>>>>> 327ff9e2533f34cc0cd5f4f11708e85ebf734a19
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
<<<<<<< HEAD
        onClick={ handleClickCategory }
=======
        value="All"
        onClick={ (event) => handleClick(event) }
>>>>>>> 327ff9e2533f34cc0cd5f4f11708e85ebf734a19
      >
        All
      </button>
    </div>

  );
}

export default withRouter(CategoryControls);
