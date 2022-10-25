import PropTypes from 'prop-types';
import React from 'react';

export default class RecipeCard extends React.Component {
  render() {
    const { recipe, index, title } = this.props;

    return (
      <div>
        <div
          data-testid={ `${index}-recipe-card` }
        >
          <img
            data-testid={ `${index}-card-img` }
            src={
              title === 'meals'
                ? recipe.strMealThumb
                : recipe.strDrinkThumb
            }
            alt={
              title === 'meals'
                ? recipe.strMeal
                : recipe.strDrink
            }
          />
          <h3 data-testid={ `${index}-card-name` }>
            {
              title === 'meals'
                ? recipe.strMeal
                : recipe.strDrink
            }
          </h3>
        </div>
      </div>

    );
  }
}

RecipeCard.propTypes = {
  index: PropTypes.number,
  rec: PropTypes.shape({
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
  }),
  title: PropTypes.string,
}.isrequired;
