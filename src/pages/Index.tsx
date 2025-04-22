import { useState } from "react";
import Header from "@/components/Header";
import RecipeCard from "@/components/RecipeCard";
import CategoryBadge from "@/components/CategoryBadge";
import { recipes, categories } from "@/data/recipes";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [visibleRecipes, setVisibleRecipes] = useState(6);

  const loadMore = () => {
    setVisibleRecipes(prev => Math.min(prev + 3, recipes.length));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-recipe-light to-recipe-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair font-bold text-4xl md:text-5xl text-recipe-dark mb-4">
            Готовим из того, что есть дома!
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Найдите вкусные рецепты из продуктов, которые уже есть в вашем холодильнике. Быстро, просто и аппетитно!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-recipe-primary hover:bg-recipe-primary/90">
              Искать по ингредиентам
            </Button>
            <Button variant="outline" className="border-recipe-primary text-recipe-primary hover:bg-recipe-primary hover:text-white">
              Популярные рецепты
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair font-bold text-2xl md:text-3xl text-center mb-8">
            Категории рецептов
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 justify-items-center">
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
          <h2 className="font-playfair font-bold text-2xl md:text-3xl text-center mb-8">
            Рецепты из простых продуктов
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.slice(0, visibleRecipes).map((recipe) => (
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
          
          {visibleRecipes < recipes.length && (
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
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-recipe-dark text-white py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="font-playfair font-bold text-xl text-recipe-primary">Готовим Дома 🍳</h3>
              <p className="text-gray-300 mt-2">Вкусные рецепты для вашей кухни</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">О проекте</a>
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
