import { Recipe } from '../types';

export const soupsRecipes: Recipe[] = [
  {
    id: 'soup-1',
    title: 'Борщ классический',
    description: 'Традиционный украинский борщ с насыщенным вкусом и ароматом.',
    image: '/placeholder.svg',
    cookTime: '1.5 часа',
    servings: 6,
    difficulty: 'Средне',
    tags: ['Суп', 'Украинская кухня', 'Обед'],
    ingredients: [
      { name: 'Говядина на кости', amount: '500 г' },
      { name: 'Свекла', amount: '2 шт.' },
      { name: 'Капуста', amount: '200 г' },
      { name: 'Картофель', amount: '3 шт.' },
      { name: 'Морковь', amount: '1 шт.' },
      { name: 'Лук', amount: '1 шт.' },
      { name: 'Томатная паста', amount: '2 ст. л.' },
      { name: 'Чеснок', amount: '3 зубчика' },
      { name: 'Соль, перец, лавровый лист', amount: 'по вкусу' }
    ],
    steps: [
      {
        step: 1,
        description: 'Сварите мясной бульон (1-1.5 часа)',
        image: '/placeholder.svg'
      },
      {
        step: 2,
        description: 'Натрите свеклу, обжарьте с томатной пастой',
        image: '/placeholder.svg'
      },
      {
        step: 3,
        description: 'Нарежьте и обжарьте лук и морковь',
        image: '/placeholder.svg'
      },
      {
        step: 4,
        description: 'Нарежьте картофель кубиками и добавьте в бульон',
        image: '/placeholder.svg'
      },
      {
        step: 5,
        description: 'Добавьте нашинкованную капусту',
        image: '/placeholder.svg'
      },
      {
        step: 6,
        description: 'Добавьте свеклу и зажарку из овощей, варите 20 минут',
        image: '/placeholder.svg'
      },
      {
        step: 7,
        description: 'В конце добавьте чеснок, лавровый лист, соль и перец',
        image: '/placeholder.svg'
      }
    ]
  },
  {
    id: 'soup-2',
    title: 'Крем-суп из тыквы',
    description: 'Нежный и ароматный крем-суп из тыквы с нотками имбиря и корицы.',
    image: '/placeholder.svg',
    cookTime: '30 минут',
    servings: 4,
    difficulty: 'Легко',
    tags: ['Суп', 'Вегетарианское', 'Быстро'],
    ingredients: [
      { name: 'Тыква', amount: '500 г' },
      { name: 'Лук', amount: '1 шт.' },
      { name: 'Морковь', amount: '1 шт.' },
      { name: 'Картофель', amount: '1 шт.' },
      { name: 'Чеснок', amount: '2 зубчика' },
      { name: 'Имбирь', amount: '1 см корня' },
      { name: 'Сливки 10-20%', amount: '100 мл' },
      { name: 'Куриный или овощной бульон', amount: '500 мл' },
      { name: 'Соль, перец, корица', amount: 'по вкусу' }
    ],
    steps: [
      {
        step: 1,
        description: 'Нарежьте тыкву, картофель, лук и морковь',
        image: '/placeholder.svg'
      },
      {
        step: 2,
        description: 'Обжарьте лук, морковь и чеснок',
        image: '/placeholder.svg'
      },
      {
        step: 3,
        description: 'Добавьте тыкву, картофель, имбирь и залейте бульоном',
        image: '/placeholder.svg'
      },
      {
        step: 4,
        description: 'Варите 15-20 минут до мягкости овощей',
        image: '/placeholder.svg'
      },
      {
        step: 5,
        description: 'Измельчите суп блендером до однородного состояния',
        image: '/placeholder.svg'
      },
      {
        step: 6,
        description: 'Добавьте сливки, специи и доведите до кипения',
        image: '/placeholder.svg'
      }
    ]
  }
];
