import { Recipe } from '../types';

export const breakfastRecipes: Recipe[] = [
  {
    id: 'breakfast-1',
    title: 'Омлет с овощами',
    description: 'Пышный омлет с сочными овощами - идеальный завтрак для всей семьи.',
    image: '/placeholder.svg',
    cookTime: '15 минут',
    servings: 2,
    difficulty: 'Легко',
    tags: ['Завтрак', 'Быстро', 'Яйца'],
    ingredients: [
      { name: 'Яйца', amount: '4 шт.' },
      { name: 'Молоко', amount: '50 мл' },
      { name: 'Болгарский перец', amount: '1/2 шт.' },
      { name: 'Помидоры', amount: '1 шт.' },
      { name: 'Зелёный лук', amount: '2-3 стебля' },
      { name: 'Соль, перец', amount: 'по вкусу' }
    ],
    steps: [
      {
        step: 1,
        description: 'Взбейте яйца с молоком, добавьте соль и перец',
        image: '/placeholder.svg'
      },
      {
        step: 2,
        description: 'Нарежьте все овощи мелким кубиком',
        image: '/placeholder.svg'
      },
      {
        step: 3,
        description: 'Разогрейте сковороду с небольшим количеством масла',
        image: '/placeholder.svg'
      },
      {
        step: 4,
        description: 'Обжарьте овощи 2-3 минуты',
        image: '/placeholder.svg'
      },
      {
        step: 5,
        description: 'Залейте яичной смесью и готовьте под крышкой на медленном огне 5-7 минут',
        image: '/placeholder.svg'
      }
    ]
  },
  {
    id: 'breakfast-2',
    title: 'Каша овсяная с фруктами',
    description: 'Питательная и полезная овсянка с сезонными фруктами и ягодами.',
    image: '/placeholder.svg',
    cookTime: '10 минут',
    servings: 1,
    difficulty: 'Легко',
    tags: ['Завтрак', 'Быстро', 'Полезно'],
    ingredients: [
      { name: 'Овсяные хлопья', amount: '50 г' },
      { name: 'Молоко или вода', amount: '200 мл' },
      { name: 'Банан', amount: '1/2 шт.' },
      { name: 'Яблоко', amount: '1/2 шт.' },
      { name: 'Мёд', amount: '1 ст. л.' },
      { name: 'Корица', amount: 'по вкусу' }
    ],
    steps: [
      {
        step: 1,
        description: 'Залейте овсяные хлопья горячим молоком или водой',
        image: '/placeholder.svg'
      },
      {
        step: 2,
        description: 'Накройте крышкой и оставьте на 5 минут',
        image: '/placeholder.svg'
      },
      {
        step: 3,
        description: 'Нарежьте фрукты небольшими кусочками',
        image: '/placeholder.svg'
      },
      {
        step: 4,
        description: 'Добавьте фрукты, мёд и корицу в кашу, перемешайте',
        image: '/placeholder.svg'
      }
    ]
  }
];
