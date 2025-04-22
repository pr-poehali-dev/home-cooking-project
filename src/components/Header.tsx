import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-recipe-primary shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-white text-2xl font-bold">Готовим Дома 🍳</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-recipe-light">Главная</Link>
            <Link to="/#categories" className="text-white hover:text-recipe-light">Категории</Link>
            <Link to="/#about" className="text-white hover:text-recipe-light">О проекте</Link>
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Поиск рецептов..."
                className="pl-3 pr-10 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-recipe-secondary"
              />
              <Search className="absolute right-3 text-gray-500 w-4 h-4" />
            </div>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" onClick={toggleMenu} className="text-white p-1">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-recipe-light" onClick={toggleMenu}>Главная</Link>
              <Link to="/#categories" className="text-white hover:text-recipe-light" onClick={toggleMenu}>Категории</Link>
              <Link to="/#about" className="text-white hover:text-recipe-light" onClick={toggleMenu}>О проекте</Link>
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Поиск рецептов..."
                  className="w-full pl-3 pr-10 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-recipe-secondary"
                />
                <Search className="absolute right-3 text-gray-500 w-4 h-4" />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
