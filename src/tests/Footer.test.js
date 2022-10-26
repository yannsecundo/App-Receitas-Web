import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithContext from './renderWithContext';
import Recipes from '../pages/Recipes';
import Profile from '../pages/Profile';

describe('Testar o componente Footer', () => {
  const footer = 'footer';
  const drinksBtn = 'drinks-bottom-btn';
  const mealsBtn = 'meals-bottom-btn';

  it('verifica se os botões estão no path "/drinks e /meals"', () => {
    renderWithContext(<Recipes />);

    expect(screen.getByTestId(footer)).toBeInTheDocument();
    expect(screen.getByTestId(drinksBtn)).toBeInTheDocument();
    expect(screen.getByTestId(mealsBtn)).toBeInTheDocument();
  });

  it('verifica se os botões estão no path "/profile"', () => {
    renderWithContext(<Profile />);

    expect(screen.getByTestId(footer)).toBeInTheDocument();
    expect(screen.getByTestId(drinksBtn)).toBeInTheDocument();
    expect(screen.getByTestId(mealsBtn)).toBeInTheDocument();
  });

  it('verifica se no botão Drinks leva para o path "/drinks" ', () => {
    const { history } = renderWithContext(<Profile />);

    const btnDrinks = screen.getByTestId(drinksBtn);

    userEvent.click(btnDrinks);

    const { pathname } = history.location;

    expect(pathname).toBe('/drinks');
  });

  it('verifica se no botão Drinks leva para o path "/meals" ', () => {
    const { history } = renderWithContext(<Profile />);

    const btnMeals = screen.getByTestId(mealsBtn);

    userEvent.click(btnMeals);

    const { pathname } = history.location;

    expect(pathname).toBe('/meals');
  });
});
