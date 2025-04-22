import { Recipe } from '../types';

export const saladsRecipes: Recipe[] = [
  {
    id: 'salad-1',
    title: 'Греческий салат',
    description: 'Классический греческий салат с огурцами, помидорами, сыром фета и оливками.',
    image: '/placeholder.svg',
    cookTime: '15 минут',
    servings: 2,
    difficulty: 'Легко',
    tags: ['Салат', 'Средиземноморская кухня', 'Быстро'],
    ingredients: [
      { name: 'Огурцы', amount: '1 шт.' },
      { name: 'Помидоры', amount: '2 шт.' },
      { name: 'Болгарский перец', amount: '1 шт.' },
      { name: 'Красный лук', amount: '1/2 шт.' },
      { name: 'Сыр фета', amount: '100 г' },
      { name: 'Оливки/маслины', amount: '50 г' },
      { name: 'Оливковое масло', amount: '2 ст. л.' },
      { name: 'Лимонный сок', amount: '1 ст. л.' },
      { name: 'Орегано, соль, перец', amount: 'по вкусу' }
    ],
    steps: [
      {
        step: 1,
        description: 'Нарежьте огурцы, помидоры и перец крупными кусками',
        image: '/placeholder.svg'
      },
      {
        step: 2,
        description: 'Нарежьте лук тонкими полукольцами',
        image: '/placeholder.svg'
      },
      {
        step: 3,
        description: 'Нарежьте сыр фета кубиками',
        image: '/placeholder.svg'
      },
      {
        step: 4,
        description: 'Смешайте все ингредиенты в салатнике',
        image: '/placeholder.svg'
      },
      {
        step: 5,
        description: 'Полейте оливковым маслом и лимонным соком, посыпьте орегано',
        image: '/placeholder.svg'
      }
    ]
  },
  {
    id: 'salad-2',
    title: 'Салат Цезарь с курицей',
    description: 'Популярный салат с куриным филе, хрустящими сухариками и соусом Цезарь.',
    image: '/placeholder.svg',
    cookTime: '25 минут',
    servings: 2,
    difficulty: 'Средне',
    tags: ['Салат', 'Курица', 'Обед'],
    ingredients: [
      { name: 'Куриное филе', amount: '200 г' },
      { name: 'Салат Романо или Айсберг', amount: '1 кочан' },
      { name: 'Пармезан', amount: '50 г' },
      { name: 'Белый хлеб для сухариков', amount: '2 ломтика' },
      { name: 'Чеснок', amount: '1 зубчик' },
      { name: 'Оливковое масло', amount: '2 ст. л.' },
      { name: 'Яйцо', amount: '1 шт.' },
      { name: 'Дижонская горчица', amount: '1 ч. л.' },
      { name: 'Лимонный сок', amount: '1 ст. л.' },
      { name: 'Анчоусы (опционально)', amount: '2-3 шт.' },
      { name: 'Соль, перец', amount: 'по вкусу' }
    ],
    steps: [
      {
        step: 1,
        description: 'Обжарьте куриное филе с солью и перцем до готовности',
        image: '/placeholder.svg'
      },
      {
        step: 2,
        description: 'Нарежьте хлеб кубиками, смешайте с измельченным чесноком и оливковым маслом, запеките до золотистого цвета',
        image: '/placeholder.svg'
      },
      {
        step: 3,
        description: 'Приготовьте соус: смешайте желток, горчицу, лимонный сок, измельченные анчоусы, оливковое масло',
        image: '/placeholder.svg'
      },
      {
        step: 4,
        description: 'Порвите листья салата руками',
        image: '/placeholder.svg'
      },
      {
        step: 5,
        description: 'Нарежьте куриное филе тонкими полосками',
        image: '/placeholder.svg'
      },
      {
        step: 6,
        description: 'Смешайте листья салата с соусом, добавьте курицу, сухарики и тертый пармезан',
        image: '/placeholder.svg'
      }
    ]
  }
];
