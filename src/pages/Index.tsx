import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import RecipeCard from "@/components/RecipeCard";
import CategoryBadge from "@/components/CategoryBadge";
import { recipes, getRecipesByCategory } from "@/data/recipes";
import { categories } from "@/data/categories";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Index = () => {
  const [visibleRecipes, setVisibleRecipes] = useState(6);
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [activeCategory, setActiveCategory] = useState("");
  const location = useLocation();

  // Extract category from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category") || "";
    setActiveCategory(category);
    
    if (category) {
      setFilteredRecipes(getRecipesByCategory(category));
      setVisibleRecipes(6); // Reset visible recipes when category changes
    } else {
      setFilteredRecipes(recipes);
    }
  }, [location]);

  const loadMore = () => {
    setVisibleRecipes(prev => Math.min(prev + 3, filteredRecipes.length));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-recipe-light to-recipe-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-bold text-4xl md:text-5xl text-recipe-dark mb-4">
            Готовим из того, что есть дома! 🍽️
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Найдите вкусные рецепты из продуктов, которые уже есть в вашем холодильнике. Быстро, просто и аппетитно!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="relative max-w-md mx-auto w-full">
              <input
                type="text"
                placeholder="Введите ингредиенты..."
                className="w-full pl-4 pr-12 py-3 rounded-full text-md focus:outline-none focus:ring-2 focus:ring-recipe-primary shadow-md"
              />
              <Button className="absolute right-1 top-1 rounded-full h-9 bg-recipe-primary hover:bg-recipe-primary/90">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-bold text-2xl md:text-3xl text-center mb-8">
            Категории рецептов
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 justify-items-center">
            {categories.map((category, index) => (
              <CategoryBadge 
                key={index} 
                name={category.name} 
                icon={category.icon}
                slug={category.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-baseline mb-8">
            <h2 className="font-bold text-2xl md:text-3xl text-recipe-dark">
              {activeCategory 
                ? `Рецепты: ${categories.find(c => c.slug === activeCategory)?.name || activeCategory}` 
                : "Рецепты из простых продуктов"}
            </h2>
            {activeCategory && (
              <Button 
                variant="link" 
                className="text-recipe-primary"
                onClick={() => {
                  setActiveCategory("");
                  setFilteredRecipes(recipes);
                  window.history.pushState({}, "", "/");
                }}
              >
                Все рецепты
              </Button>
            )}
          </div>
          
          {filteredRecipes.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRecipes.slice(0, visibleRecipes).map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    id={recipe.id}
                    title={recipe.title}
                    image={recipe.image}
                    cookTime={recipe.cookTime}
                    difficulty={recipe.difficulty}
                    tags={recipe.tags}
                  />
                ))}
              </div>
              
              {visibleRecipes < filteredRecipes.length && (
                <div className="mt-10 text-center">
                  <Button 
                    onClick={loadMore} 
                    variant="outline" 
                    className="border-recipe-primary text-recipe-primary hover:bg-recipe-primary hover:text-white"
                  >
                    Показать больше рецептов
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">Рецепты не найдены</p>
              <Button 
                className="mt-4 bg-recipe-primary hover:bg-recipe-primary/90"
                onClick={() => {
                  setActiveCategory("");
                  setFilteredRecipes(recipes);
                  window.history.pushState({}, "", "/");
                }}
              >
                Показать все рецепты
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bold text-2xl md:text-3xl text-recipe-dark mb-6">
              О проекте "Готовим Дома" 🍳
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Наш проект создан для тех, кто любит готовить вкусные блюда из продуктов, которые легко найти в каждом доме. 
              Мы собрали лучшие рецепты, которые можно приготовить быстро и без особых кулинарных навыков.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Все рецепты проверены и имеют пошаговые инструкции, чтобы вы могли приготовить блюдо даже если у вас нет опыта.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button className="bg-recipe-primary hover:bg-recipe-primary/90">
                Подписаться на обновления
              </Button>
              <Button variant="outline" className="border-recipe-primary text-recipe-primary hover:bg-recipe-primary hover:text-white">
                Предложить рецепт
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-recipe-dark text-white py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="font-bold text-xl text-recipe-primary">Готовим Дома 🍳</h3>
              <p className="text-gray-300 mt-2">Вкусные рецепты для вашей кухни</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a href="#about" className="text-gray-300 hover:text-white">О проекте</a>
              <a href="#" className="text-gray-300 hover:text-white">Контакты</a>
              <a href="#" className="text-gray-300 hover:text-white">Политика конфиденциальности</a>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Готовим из того, что есть дома. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
