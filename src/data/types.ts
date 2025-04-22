/**
 * Типы данных для рецептов
 */

export interface Ingredient {
  name: string;
  amount: string;
}

export interface Step {
  step: number;
  description: string;
  image?: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  cookTime: string;
  servings: number;
  difficulty: string;
  tags: string[];
  ingredients: Ingredient[];
  steps: Step[];
}

export interface Category {
  name: string;
  icon: string;
  slug: string;
}
