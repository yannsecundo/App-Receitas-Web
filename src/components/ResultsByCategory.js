import { React, useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import RecipeCard from './RecipeCard';

export default function ResultsByCategory() {
  const { title, categoryResults } = useContext(AppContext);

  const renderCase = () => {
    if (title === 'meals' && categoryResults.length > 1) {
      return categoryResults.map((result, index) => (
        <Link
          to={ `/foods/${result.idMeal}` }
          key={ result.strMeal }
        >
          <RecipeCard
            recipe={ result }
            title={ title }
            index={ index }
          />
        </Link>
      ));
    }

    if (title === 'meals' && categoryResults.length === 1) {
      return (<RecipeCard
        key={ categoryResults[0].idMeal }
        recipe={ categoryResults[0] }
        title={ title }
        index={ 0 }
      />);
    }

    if (title === 'drinks' && categoryResults.length > 1) {
      return categoryResults.map((result, index) => (
        <Link
          to={ `/drinks/${result.idDrink}` }
          key={ result.strDrink }
        >
          <RecipeCard
            recipe={ result }
            title={ title }
            index={ index }
          />
        </Link>
      ));
    }

    if (title === 'drinks' && categoryResults.length === 1) {
      return (<RecipeCard
        key={ categoryResults[0].idDrink }
        recipe={ categoryResults[0] }
        title={ title }
        index={ 0 }
      />);
    }
  };

  return (
    <div>
      {renderCase()}
    </div>
  );
}
