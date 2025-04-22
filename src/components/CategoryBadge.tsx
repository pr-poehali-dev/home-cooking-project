import { Link } from "react-router-dom";

interface CategoryBadgeProps {
  name: string;
  icon: string;
  slug: string;
}

const CategoryBadge = ({ name, icon, slug }: CategoryBadgeProps) => {
  return (
    <Link to={`/category/${slug}`} className="group">
      <div className="flex flex-col items-center p-4 transition-all duration-300 hover:scale-110">
        <div className="text-4xl mb-2">{icon}</div>
        <span className="text-sm text-gray-700 group-hover:text-recipe-primary font-medium text-center">
          {name}
        </span>
      </div>
    </Link>
  );
};

export default CategoryBadge;
