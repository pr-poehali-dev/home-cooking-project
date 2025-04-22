import { Recipe } from '../types';

export const mainDishesRecipes: Recipe[] = [
  {
    id: 'main-1',
    title: 'Паста Карбонара',
    description: 'Классическая итальянская паста с соусом из яиц, сыра, бекона и черного перца.',
    image: '/placeholder.svg',
    cookTime: '20 минут',
    servings: 2,
    difficulty: 'Средне',
    tags: ['Основное блюдо', 'Итальянская кухня', 'Паста'],
    ingredients: [
      { name: 'Спагетти', amount: '200 г' },
      { name: 'Бекон или панчетта', amount: '100 г' },
      { name: 'Яйца', amount: '2 шт.' },
      { name: 'Сыр Пармезан', amount: '50 г' },
      { name: 'Черный перец', amount: 'по вкусу' },
      { name: 'Соль', amount: 'по вкусу' }
    ],
    steps: [
      {
        step: 1,
        description: 'Отварите спагетти в подсоленной воде до состояния аль денте',
        image: '/placeholder.svg'
      },
      {
        step: 2,
        description: 'Нарежьте бекон кубиками и обжарьте до золотистой корочки',
        image: '/placeholder.svg'
      },
      {
        step: 3,
        description: 'Взбейте яйца с тертым сыром и перцем',
        image: '/placeholder.svg'
      },
      {
        step: 4,
        description: 'Слейте воду с пасты, оставив немного для соуса',
        image: '/placeholder.svg'
      },
      {
        step: 5,
        description: 'Смешайте горячую пасту с беконом, затем добавьте яичную смесь и быстро перемешайте',
        image: '/placeholder.svg'
      }
    ]
  },
  {
    id: 'main-2',
    title: 'Куриные котлеты',
    description: 'Сочные домашние котлеты из куриного фарша с добавлением лука и специй.',
    image: '/placeholder.svg',
    cookTime: '30 минут',
    servings: 4,
    difficulty: 'Легко',
    tags: ['Основное блюдо', 'Мясо', 'Обед'],
    ingredients: [
      { name: 'Куриный фарш', amount: '500 г' },
      { name: 'Лук', amount: '1 шт.' },
      { name: 'Чеснок', amount: '2 зубчика' },
      { name: 'Хлеб белый', amount: '50 г' },
      { name: 'Молоко', amount: '50 мл' },
      { name: 'Соль, перец', amount: 'по вкусу' }
    ],
    steps: [
      {
        step: 1,
        description: 'Замочите хлеб в молоке на 5 минут',
        image: '/placeholder.svg'
      },
      {
        step: 2,
        description: 'Мелко нарежьте лук и чеснок',
        image: '/placeholder.svg'
      },
      {
        step: 3,
        description: 'Смешайте фарш, лук, чеснок, размоченный хлеб, соль и перец',
        image: '/placeholder.svg'
      },
      {
        step: 4,
        description: 'Сформируйте котлеты и обжарьте на среднем огне до готовности с обеих сторон',
        image: '/placeholder.svg'
      }
    ]
  }
];
