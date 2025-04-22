/**
 * Этот файл устарел и оставлен для обратной совместимости
 * Рекомендуется использовать новую структуру из src/data/recipes/index.ts
 */

import { recipes, getRecipesByCategory, getRecipeById } from './recipes/index';
import { categories } from './categories';
export { type Recipe } from './types';

export { recipes, categories, getRecipesByCategory, getRecipeById };
