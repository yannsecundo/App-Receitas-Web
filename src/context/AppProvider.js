import { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [title, setTitle] = useState('');
  const [recipeList, setRecipeList] = useState([]);
  const [category, setCategory] = useState([]);
  const [categoryResults, setCategoryResults] = useState([]);
  const [categoryClicked, setCategoryClicked] = useState(false);

  const contexto = useMemo(() => ({
    title,
    setTitle,
    recipeList,
    setRecipeList,
    category,
    setCategory,
    categoryResults,
    setCategoryResults,
    categoryClicked,
    setCategoryClicked,
  }), [title, recipeList, category, categoryClicked, categoryResults]);

  // pega as 5 categories de meals
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
    // pega as 5 categories de drinks
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

  return (
    <AppContext.Provider value={ contexto }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
