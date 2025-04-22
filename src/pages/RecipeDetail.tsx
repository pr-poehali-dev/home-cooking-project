import { useParams, Link } from 'react-router-dom';
import { Clock, User, ChevronLeft, Utensils } from 'lucide-react';
import Header from '@/components/Header';
import { getRecipeById } from '@/data/recipes';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const RecipeDetail = () => {
  const { id = '' } = useParams();
  const recipe = getRecipeById(id);

  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container mx-auto px-4 py-8 flex-grow flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4">Рецепт не найден</h1>
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
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Link to="/" className="flex items-center text-recipe-primary hover:underline">
            <ChevronLeft className="h-4 w-4 mr-1" />
            <span>Вернуться к рецептам</span>
          </Link>
        </div>
        
        {/* Recipe Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-recipe-dark mb-4">{recipe.title}</h1>
            <p className="text-lg text-gray-600 mb-6">{recipe.description}</p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-recipe-primary mr-2" />
                <span>{recipe.cookTime}</span>
              </div>
              <div className="flex items-center">
                <User className="h-5 w-5 text-recipe-primary mr-2" />
                <span>{recipe.difficulty}</span>
              </div>
              <div className="flex items-center">
                <Utensils className="h-5 w-5 text-recipe-primary mr-2" />
                <span>{recipe.servings} порции</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {recipe.tags.map((tag, index) => (
                <span key={index} className="bg-recipe-light text-recipe-dark px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-1">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src={recipe.image || "/placeholder.svg"} 
                alt={recipe.title}
                className="w-full h-64 object-cover" 
              />
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        {/* Ingredients and Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ingredients */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-recipe-dark mb-4">Ингредиенты</h2>
            <ul className="space-y-3 bg-recipe-light p-6 rounded-lg">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex justify-between">
                  <span className="text-recipe-dark">{ingredient.name}</span>
                  <span className="text-gray-600 font-medium">{ingredient.amount}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Steps */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-recipe-dark mb-4">Приготовление</h2>
            <ol className="space-y-6">
              {recipe.steps.map((step) => (
                <li key={step.step} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-recipe-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                      {step.step}
                    </div>
                    <div className="flex-grow">
                      <p className="text-gray-700">{step.description}</p>
                      {step.image && (
                        <div className="mt-4">
                          <img 
                            src={step.image} 
                            alt={`Шаг ${step.step}`}
                            className="rounded-lg w-full max-h-48 object-cover" 
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-recipe-dark text-white py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="font-bold text-xl text-recipe-primary">Готовим Дома 🍳</h3>
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
