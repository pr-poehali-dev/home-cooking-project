export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  cookTime: string;
  servings: number;
  difficulty: string;
  tags: string[];
  ingredients: {
    name: string;
    amount: string;
  }[];
  steps: {
    step: number;
    description: string;
    image?: string;
  }[];
}

export const recipes: Recipe[] = [
  {
    id: "omlet-s-syrom",
    title: "Омлет с сыром",
    description: "Быстрый и сытный омлет с сыром - идеальный вариант для завтрака, который можно приготовить из того, что обычно есть в холодильнике.",
    image: "/placeholder.svg",
    cookTime: "10 мин",
    servings: 2,
    difficulty: "Легко",
    tags: ["Завтрак", "Быстро", "Яйца"],
    ingredients: [
      { name: "Яйца", amount: "4 шт" },
      { name: "Молоко", amount: "50 мл" },
      { name: "Сыр твердый", amount: "50 г" },
      { name: "Соль", amount: "по вкусу" },
      { name: "Перец", amount: "по вкусу" },
      { name: "Масло растительное", amount: "1 ст.л." }
    ],
    steps: [
      { 
        step: 1, 
        description: "Разбейте яйца в миску, добавьте молоко, соль и перец. Взбейте вилкой до однородности." 
      },
      { 
        step: 2, 
        description: "Натрите сыр на мелкой терке." 
      },
      { 
        step: 3, 
        description: "Разогрейте сковороду, добавьте масло и вылейте яичную смесь." 
      },
      { 
        step: 4, 
        description: "Когда низ омлета схватится, посыпьте сверху тертым сыром." 
      },
      { 
        step: 5, 
        description: "Накройте крышкой и готовьте на медленном огне до готовности (около 3-4 минут)." 
      }
    ]
  },
  {
    id: "pasta-carbonara",
    title: "Паста Карбонара",
    description: "Классическая итальянская паста, которую можно приготовить из простых ингредиентов.",
    image: "/placeholder.svg",
    cookTime: "20 мин",
    servings: 2,
    difficulty: "Средне",
    tags: ["Паста", "Ужин", "Итальянская"],
    ingredients: [
      { name: "Спагетти", amount: "200 г" },
      { name: "Бекон или грудинка", amount: "100 г" },
      { name: "Яйца", amount: "2 шт" },
      { name: "Пармезан", amount: "50 г" },
      { name: "Чеснок", amount: "1 зубчик" },
      { name: "Соль", amount: "по вкусу" },
      { name: "Перец черный", amount: "по вкусу" }
    ],
    steps: [
      { 
        step: 1, 
        description: "Отварите спагетти в подсоленной воде согласно инструкции на упаковке до состояния 'аль денте'." 
      },
      { 
        step: 2, 
        description: "Нарежьте бекон кубиками. Обжарьте на сковороде до золотистой корочки. Добавьте измельченный чеснок в конце жарки." 
      },
      { 
        step: 3, 
        description: "Взбейте яйца в миске, добавьте натертый пармезан, соль и перец." 
      },
      { 
        step: 4, 
        description: "Слейте воду с готовых спагетти, оставив немного жидкости. Выложите пасту в сковороду к бекону, перемешайте." 
      },
      { 
        step: 5, 
        description: "Снимите сковороду с огня, добавьте яичную смесь, быстро перемешайте. Яйца должны превратиться в кремообразный соус, но не свернуться." 
      }
    ]
  },
  {
    id: "tvorozhnaya-zapekanka",
    title: "Творожная запеканка",
    description: "Нежная запеканка из творога - отличное блюдо для завтрака или полдника. Минимум ингредиентов, максимум вкуса!",
    image: "/placeholder.svg",
    cookTime: "50 мин",
    servings: 4,
    difficulty: "Легко",
    tags: ["Десерт", "Творог", "Завтрак"],
    ingredients: [
      { name: "Творог", amount: "500 г" },
      { name: "Яйца", amount: "3 шт" },
      { name: "Сахар", amount: "100 г" },
      { name: "Манная крупа", amount: "2 ст.л." },
      { name: "Ванильный сахар", amount: "1 пакетик" },
      { name: "Сметана", amount: "2 ст.л." }
    ],
    steps: [
      { 
        step: 1, 
        description: "Разотрите творог с яйцами и сахаром до однородной массы." 
      },
      { 
        step: 2, 
        description: "Добавьте манную крупу и ванильный сахар, перемешайте и оставьте на 15 минут, чтобы манка набухла." 
      },
      { 
        step: 3, 
        description: "Форму для запекания смажьте маслом, вылейте творожную массу." 
      },
      { 
        step: 4, 
        description: "Смажьте поверхность сметаной." 
      },
      { 
        step: 5, 
        description: "Выпекайте в разогретой до 180°C духовке около 30-40 минут до золотистой корочки." 
      }
    ]
  }
];

export const categories = [
  { name: "Завтраки", icon: "🍳", slug: "breakfast" },
  { name: "Супы", icon: "🍲", slug: "soups" },
  { name: "Салаты", icon: "🥗", slug: "salads" },
  { name: "Основные блюда", icon: "🍽️", slug: "main" },
  { name: "Десерты", icon: "🍰", slug: "desserts" },
  { name: "Быстрые рецепты", icon: "⏱️", slug: "quick" },
];
