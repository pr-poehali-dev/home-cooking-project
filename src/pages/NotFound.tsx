import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="text-6xl mb-4">🍽️</div>
        <h1 className="font-playfair font-bold text-4xl mb-4 text-center">Страница не найдена</h1>
        <p className="text-gray-600 max-w-md text-center mb-8">
          К сожалению, запрашиваемая страница не существует или была перемещена. 
          Но не расстраивайтесь – у нас есть много вкусных рецептов на главной странице!
        </p>
        <Link to="/">
          <Button className="bg-recipe-primary hover:bg-recipe-primary/90">
            Вернуться на главную
          </Button>
        </Link>
      </div>
      
      {/* Footer */}
      <footer className="bg-recipe-dark text-white py-8">
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

export default NotFound;
