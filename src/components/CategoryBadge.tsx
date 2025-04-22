import { Link } from "react-router-dom";

interface CategoryBadgeProps {
  name: string;
  icon: string;
  slug: string;
}

const CategoryBadge = ({ name, icon, slug }: CategoryBadgeProps) => {
  return (
    <Link to={`/category/${slug}`} className="group">
      <div className="flex flex-col items-center p-3 transition-all">
        <div className="w-16 h-16 rounded-full bg-recipe-light flex items-center justify-center mb-2 group-hover:bg-recipe-secondary transition-colors">
          <span className="text-2xl">{icon}</span>
        </div>
        <span className="text-sm text-center font-medium text-gray-700 group-hover:text-recipe-primary transition-colors">
          {name}
        </span>
      </div>
    </Link>
  );
};

export default CategoryBadge;
