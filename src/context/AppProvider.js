import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import AppContext from './AppContext';

function AppProvider({ children, history }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState([]);
  const [categoryResults, setCategoryResults] = useState([]);
  const [categoryClicked, setCategoryClicked] = useState(false);
  const [recipe, setRecipe] = useState([]);
  const [filterType, setFilterType] = useState('');
  const [searchFilter, setSearchFilter] = useState('');
  const [recipeList, setRecipeList] = useState([]);

  const contexto = useMemo(() => ({
    title,
    setTitle,
    setFilterType,
    setSearchFilter,
    recipe,
    setRecipe,
    category,
    setCategory,
    categoryResults,
    setCategoryResults,
    categoryClicked,
    setCategoryClicked,
    recipeList,
    setRecipeList,
  }), [title, categoryResults, category, recipe, categoryClicked, recipeList]);

  // filtra comida
  useEffect(() => {
    if (title === 'foods') {
      const fetchRecipes = async (endpoint) => {
        const data = await fetch(endpoint)
          .then((response) => response.json());
        const MAFIC_NUMBER = 12;
        const get12FromData = data.meals !== null && data.meals.length > MAFIC_NUMBER
          ? data.meals.filter((meal) => data.meals.indexOf(meal) < MAFIC_NUMBER)
          : data.meals;
        setRecipe(get12FromData);
      };
      fetchRecipes('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      if (filterType === 'ingredient') {
        const endpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchFilter}`;
        fetchRecipes(endpoint);
      }
      if (filterType === 'name') {
        const endpoint = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFilter}`;
        fetchRecipes(endpoint);
      }
      if (filterType === 'firstLetter') {
        if (searchFilter.length > 1) {
          global.alert('Your search must have only 1 (one) character');
        } else {
          const endpoint = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchFilter}`;
          fetchRecipes(endpoint);
        }
      }
    }
  }, [filterType, searchFilter, title]);
  // filtra bebida
  useEffect(() => {
    if (title === 'drinks') {
      const fetchRecipes = async (endpoint) => {
        const data = await fetch(endpoint)
          .then((response) => response.json());
        const MAFIC_NUMBER = 12;
        const get12FromData = data.drinks !== null && data.drinks.length > MAFIC_NUMBER
          ? data.drinks.filter((drink) => data.drinks.indexOf(drink) < MAFIC_NUMBER)
          : data.drinks;
        setRecipe(get12FromData);
      };
      fetchRecipes('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      if (filterType === 'ingredient') {
        const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchFilter}`;
        fetchRecipes(endpoint);
      }
      if (filterType === 'name') {
        const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchFilter}`;
        fetchRecipes(endpoint);
      }
      if (filterType === 'firstLetter') {
        if (searchFilter.length > 1) {
          global.alert('Your search must have only 1 (one) character');
        } else {
          const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchFilter}`;
          fetchRecipes(endpoint);
        }
      }
    }
  }, [filterType, searchFilter, title]);

  // categoria de comidas
  useEffect(() => {
    let ENDPOINT;
    if (title === 'meals') {
      ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
      const fetchRecipeCategories = async (endpoint) => {
        const response = await fetch(endpoint);
        const data = await response.json();
        const categories = data.meals;
        const five = 5;
        const getFiveCategories = categories.slice(0, five);
        setCategory(getFiveCategories);
      };
      fetchRecipeCategories(ENDPOINT);
    }
    // categoria de bebidas
    if (title === 'drinks') {
      ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
      const fetchRecipeCategories = async (endpoint) => {
        const response = await fetch(endpoint);
        const data = await response.json();
        const categories = data.drinks;
        const five = 5;
        const getFiveCategories = categories.slice(0, five);
        setCategory(getFiveCategories);
      };
      fetchRecipeCategories(ENDPOINT);
    }
  }, [title]);

  useEffect(() => {
    if (recipe === null) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    } else if (title === 'foods' && recipe.length === 1) {
      const rec = recipe[0].idMeal;
      history.push(`/foods/${rec}`);
    } else if (title === 'drinks' && recipe.length === 1) {
      const rec = recipe[0].idDrink;
      history.push(`/drinks/${rec}`);
    }
  }, [recipe, title, history]);

  return (
    <AppContext.Provider value={ contexto }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(AppProvider);
