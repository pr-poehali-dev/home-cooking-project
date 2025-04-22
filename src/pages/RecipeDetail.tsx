import { useParams, Link } from "react-router-dom";
import { Clock, Users, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import { Recipe, recipes } from "@/data/recipes";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = recipes.find(r => r.id === id) as Recipe;

  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container mx-auto py-16 px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Рецепт не найден</h2>
          <Link to="/">
            <Button>Вернуться на главную</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back button */}
        <Link to="/" className="inline-flex items-center text-recipe-primary hover:underline mb-6">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Назад к рецептам
        </Link>
        
        {/* Recipe header */}
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <div className="w-full md:w-1/2">
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-[350px] object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-wrap gap-2 mb-4">
              {recipe.tags.map((tag, index) => (
                <span key={index} className="recipe-tag">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-playfair font-bold text-3xl md:text-4xl text-gray-800 mb-4">
              {recipe.title}
            </h1>
            <p className="text-gray-600 mb-6">
              {recipe.description}
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-recipe-primary mr-2" />
                <span className="text-gray-700">{recipe.cookTime}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-recipe-primary mr-2" />
                <span className="text-gray-700">{recipe.servings} порций</span>
              </div>
            </div>
            <div className="p-4 bg-recipe-light rounded-lg">
              <h3 className="font-bold text-lg mb-3">Уровень сложности</h3>
              <div className="flex items-center">
                <span className="text-recipe-primary font-medium">{recipe.difficulty}</span>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        {/* Ingredients */}
        <div className="mb-10">
          <h2 className="font-playfair font-bold text-2xl mb-6">Ингредиенты</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium">{ingredient.name}</span>
                  <span className="text-gray-600">{ingredient.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Instructions */}
        <div className="mb-10">
          <h2 className="font-playfair font-bold text-2xl mb-6">Инструкция приготовления</h2>
          <div className="space-y-6">
            {recipe.steps.map((stepItem) => (
              <div key={stepItem.step} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg text-recipe-primary mb-3">
                  Шаг {stepItem.step}
                </h3>
                <p className="text-gray-700">{stepItem.description}</p>
                {stepItem.image && (
                  <img 
                    src={stepItem.image} 
                    alt={`Шаг ${stepItem.step}`} 
                    className="mt-4 rounded-md w-full max-w-[400px]" 
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Similar recipes suggestion would go here */}
      </div>
      
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

export default RecipeDetail;
