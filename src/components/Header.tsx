import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-recipe-primary text-2xl font-playfair font-bold">Готовим Дома</span>
          <span className="ml-2 text-recipe-accent">🍳</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-recipe-primary font-medium">
            Главная
          </Link>
          <Link to="/categories" className="text-gray-700 hover:text-recipe-primary font-medium">
            Категории
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-recipe-primary font-medium">
            О проекте
          </Link>
          <div className="relative">
            <input
              type="text"
              placeholder="Найти рецепт..."
              className="pl-9 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-recipe-primary focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            aria-label="Меню"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-recipe-primary font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/categories" 
              className="text-gray-700 hover:text-recipe-primary font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Категории
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-recipe-primary font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              О проекте
            </Link>
            <div className="relative">
              <input
                type="text"
                placeholder="Найти рецепт..."
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-recipe-primary focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
