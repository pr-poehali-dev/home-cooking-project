import { Link } from 'react-router-dom';

interface CategoryBadgeProps {
  name: string;
  icon: string;
  slug: string;
}

const CategoryBadge = ({ name, icon, slug }: CategoryBadgeProps) => {
  return (
    <Link 
      to={`/?category=${slug}`}
      className="flex flex-col items-center justify-center p-4 transition-all duration-300 hover:scale-105"
    >
      <div className="bg-recipe-light w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-2 shadow-md hover:bg-recipe-secondary hover:text-white transition-colors">
        {icon}
      </div>
      <span className="text-center text-sm font-medium text-recipe-dark">{name}</span>
    </Link>
  );
};

export default CategoryBadge;
