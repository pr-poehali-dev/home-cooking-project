import { Recipe } from '../types';
import { breakfastRecipes } from './breakfast';
import { mainDishesRecipes } from './main-dishes';
import { soupsRecipes } from './soups';
import { saladsRecipes } from './salads';

/**
 * Объединение всех рецептов в один массив
 */
export const recipes: Recipe[] = [
  ...breakfastRecipes,
  ...mainDishesRecipes,
  ...soupsRecipes,
  ...saladsRecipes
];

/**
 * Функция для получения рецептов по категории
 */
export const getRecipesByCategory = (categorySlug: string): Recipe[] => {
  switch (categorySlug) {
    case 'breakfast':
      return recipes.filter(recipe => recipe.tags.includes('Завтрак'));
    case 'soups':
      return recipes.filter(recipe => recipe.tags.includes('Суп'));
    case 'salads':
      return recipes.filter(recipe => recipe.tags.includes('Салат'));
    case 'main':
      return recipes.filter(recipe => 
        recipe.tags.includes('Ужин') || 
        recipe.tags.includes('Обед') || 
        recipe.tags.includes('Основное блюдо')
      );
    case 'desserts':
      return recipes.filter(recipe => recipe.tags.includes('Десерт'));
    case 'quick':
      return recipes.filter(recipe => recipe.tags.includes('Быстро'));
    default:
      return recipes;
  }
};

/**
 * Функция для получения конкретного рецепта по id
 */
export const getRecipeById = (id: string): Recipe | undefined => {
  return recipes.find(recipe => recipe.id === id);
};
