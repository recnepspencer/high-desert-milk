import React from 'react';
import Link from 'next/link';

interface RecipeCardProps {
  recipeName: string;
  imageUrl: string;
  backgroundColor: string;
  recipeUrl: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  recipeName,
  imageUrl,
  backgroundColor,
  recipeUrl,
}) => {
  return (
    <div className="flex flex-col p-3">
      <img src={imageUrl} alt="" className="" />
      <div className={`flex ${backgroundColor} justify-center p-2`}>
        <Link href={recipeUrl} className="text-l flex text-white font-light text-center p-2 hover:underline">
            <p className="ml-4">{recipeName}</p>
            <button className="justify-right mt-auto mb-auto mr-3 ml-4 text-white">
              &gt;
            </button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
