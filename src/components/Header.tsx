import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🍳</span>
            <span className="font-playfair font-bold text-xl text-recipe-primary">Готовим Дома</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-700 hover:text-recipe-primary">Главная</Link>
            <Link to="/#categories" className="text-gray-700 hover:text-recipe-primary">Категории</Link>
            <Link to="/#recipes" className="text-gray-700 hover:text-recipe-primary">Рецепты</Link>
            <Link to="#" className="text-gray-700 hover:text-recipe-primary">О проекте</Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" className="border-recipe-primary text-recipe-primary hover:bg-recipe-primary hover:text-white">
              Войти
            </Button>
            <Button className="bg-recipe-primary hover:bg-recipe-primary/90">
              Добавить рецепт
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-4">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col gap-4">
              <Link to="/" className="text-gray-700 hover:text-recipe-primary py-2">Главная</Link>
              <Link to="/#categories" className="text-gray-700 hover:text-recipe-primary py-2">Категории</Link>
              <Link to="/#recipes" className="text-gray-700 hover:text-recipe-primary py-2">Рецепты</Link>
              <Link to="#" className="text-gray-700 hover:text-recipe-primary py-2">О проекте</Link>
              <div className="flex flex-col gap-3 pt-4">
                <Button variant="outline" className="border-recipe-primary text-recipe-primary hover:bg-recipe-primary hover:text-white w-full">
                  Войти
                </Button>
                <Button className="bg-recipe-primary hover:bg-recipe-primary/90 w-full">
                  Добавить рецепт
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
