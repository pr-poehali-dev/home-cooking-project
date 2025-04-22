import { Card, CardContent, CardFooter } from "./ui/card";
import { Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

export interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  cookTime: string;
  difficulty: string;
  tags: string[];
}

const RecipeCard = ({ id, title, image, cookTime, difficulty, tags }: RecipeCardProps) => {
  return (
    <Link to={`/recipe/${id}`}>
      <Card className="recipe-card h-full flex flex-col transition-all duration-300 hover:translate-y-[-5px]">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {tags.length > 0 && (
            <div className="absolute top-2 right-2">
              <span className="recipe-tag">{tags[0]}</span>
            </div>
          )}
        </div>
        <CardContent className="pt-4 pb-2 flex-grow">
          <h3 className="font-playfair font-bold text-lg text-gray-800 mb-2">{title}</h3>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{cookTime}</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>{difficulty}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-0 pb-4">
          <div className="flex flex-wrap gap-2">
            {tags.slice(1, 3).map((tag, index) => (
              <span key={index} className="recipe-tag">
                {tag}
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default RecipeCard;
