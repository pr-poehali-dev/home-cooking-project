import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow flex flex-col items-center justify-center px-4 py-12">
        <div className="text-center">
          <h1 className="text-6xl md:text-9xl font-bold text-recipe-primary mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-recipe-dark mb-6">Страница не найдена</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            Кажется, мы не смогли найти страницу, которую вы искали. Возможно, она была перемещена или удалена.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/">
              <Button className="bg-recipe-primary hover:bg-recipe-primary/90 w-full sm:w-auto">
                Вернуться на главную
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-recipe-primary text-recipe-primary hover:bg-recipe-primary hover:text-white w-full sm:w-auto"
              onClick={() => window.history.back()}
            >
              Вернуться назад
            </Button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-recipe-dark text-white py-8">
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

export default NotFound;
