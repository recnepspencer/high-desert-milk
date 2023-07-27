import React from 'react';
import Link from 'next/link';

interface Recipe {
  recipeName: string;
  imageUrl: string;
  backgroundColor: string;
  recipeUrl: string;
  isMainFeature: boolean;
  isButterFeature: boolean;
  isButtermilkFeature: boolean;
  isButter: boolean;
  isButtermilk: boolean;
}

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeData: Recipe[] = [
  {
    recipeName: 'Gooey Buttercake',
    imageUrl: '/recipes/gooey-cake.png',
    backgroundColor: 'bg-home-recipeOrange',
    recipeUrl: 'https://www.tasteofhome.com/recipes/gooey-butter-cake/',
    isMainFeature: false,
    isButterFeature: true,
    isButtermilkFeature: false,
    isButter: true,
    isButtermilk: false
  },
  {
    recipeName: 'Layered Yellowcake with Chocolate Buttercream',
    imageUrl: '/recipes/yellow-cake.png',
    backgroundColor: 'bg-home-recipeRed',
    recipeUrl: 'https://www.tasteofhome.com/recipes/layered-yellow-cake-with-chocolate-buttercream/',
    isMainFeature: false,
    isButterFeature: false,
    isButtermilkFeature: false,
    isButter: true,
    isButtermilk: false

  },
  {
    recipeName: 'Blue Ribbon Butter Cake',
    imageUrl: '/recipes/butter-cake.png',
    backgroundColor: 'bg-home-recipeBlue',
    recipeUrl: 'https://www.tasteofhome.com/recipes/blue-ribbon-butter-cake/',
    isMainFeature: true,
    isButterFeature: false,
    isButtermilkFeature: false,
    isButter: true,
    isButtermilk: false

  },
  {
    recipeName: 'Wisconsin Butter Burgers',
    imageUrl: '/recipes/butter-burger.png',
    backgroundColor: 'bg-home-recipeBlue',
    recipeUrl: 'https://www.tasteofhome.com/recipes/wisconsin-butter-basted-burgers/',
    isMainFeature: false,
    isButterFeature: false,
    isButtermilkFeature: false,
    isButter: true,
    isButtermilk: false

  },
  {
    recipeName: 'Herb-Buttered Baby Carrots',
    imageUrl: '/recipes/carrots.png',
    backgroundColor: 'bg-home-recipeOrange',
    recipeUrl: 'https://www.tasteofhome.com/recipes/herb-buttered-baby-carrots/',
    isMainFeature: false,
    isButterFeature: false,
    isButtermilkFeature: false,
    isButter: true,
    isButtermilk: false
  },
  {
    recipeName: 'Dreamy Polenta',
    imageUrl: '/recipes/dreamy-polenta.png',
    backgroundColor: 'bg-home-recipeRed',
    recipeUrl: 'https://www.tasteofhome.com/recipes/dreamy-polenta/',
    isMainFeature: false,
    isButterFeature: true,
    isButtermilkFeature: false,
    isButter: true,
    isButtermilk: false
  }, {
    recipeName: "Aunt Rose's Fantastic Butter Toffee",
    imageUrl: '/recipes/butter-toffee.png',
    backgroundColor: 'bg-home-recipeBlue',
    recipeUrl: 'https://www.tasteofhome.com/recipes/aunt-rose-s-fantastic-butter-toffee/',
    isMainFeature: false,
    isButterFeature: false,
    isButtermilkFeature: false,
    isButter: true,
    isButtermilk: false
  }, {
    recipeName: 'Butter and Herb Turkey',
    imageUrl: '/recipes/turkey.png',
    backgroundColor: 'bg-home-recipeRed',
    recipeUrl: 'https://www.tasteofhome.com/recipes/butter-herb-turkey/',
    isMainFeature: false,
    isButterFeature: false,
    isButtermilkFeature: false,
    isButter: true,
    isButtermilk: false
  },
  {
    recipeName: 'Holland Butter Cookies',
    imageUrl: '/recipes/butter-cookies.png',
    backgroundColor: 'bg-home-recipeOrange',
    recipeUrl: 'https://www.tasteofhome.com/recipes/holland-butter-cookies/',
    isMainFeature: false,
    isButterFeature: false,
    isButtermilkFeature: false,
    isButter: true,
    isButtermilk: false
  },
  {
    recipeName: 'Cheddar and Chive Mashed Potatoes',
    imageUrl: '/recipes/cheese-chive-potatoes.png',
    backgroundColor: 'bg-home-recipeOrange',
    recipeUrl: 'https://www.tasteofhome.com/recipes/cheddar-and-chive-mashed-potatoes/',
    isMainFeature: false,
    isButterFeature: true,
    isButtermilkFeature: false,
    isButter: true,
    isButtermilk: false
  }, {
    recipeName: 'Cauliflower Gratin',
    imageUrl: '/recipes/gratin.png',
    backgroundColor: 'bg-home-recipeBlue',
    recipeUrl: 'https://www.tasteofhome.com/recipes/cauliflower-gratin/',
    isMainFeature: false,
    isButterFeature: false,
    isButtermilkFeature: false,
    isButter: true,
    isButtermilk: false
  }, {
    recipeName: 'Bake Sale Lemon Bars',
    imageUrl: '/recipes/lemon-bars.png',
    backgroundColor: 'bg-home-recipeRed',
    recipeUrl: 'https://www.tasteofhome.com/recipes/bake-sale-lemon-bars/',
    isMainFeature: false,
    isButterFeature: false,
    isButtermilkFeature: false,
    isButter: true,
    isButtermilk: false
  },{
    recipeName: 'Homemade Confetti Cake',
    imageUrl: '/recipes/confetti-cake.png',
    backgroundColor: 'bg-home-recipeBlue',
    recipeUrl: 'https://www.tasteofhome.com/recipes/homemade-confetti-cake/',
    isMainFeature: false,
    isButterFeature: false,
    isButtermilkFeature: true,
    isButter: false,
    isButtermilk: true,
  },{
    recipeName: 'Picnic Fried Chicken',
    imageUrl: '/recipes/fried-chicken.png',
    backgroundColor: 'bg-home-recipeRed',
    recipeUrl: 'https://www.tasteofhome.com/recipes/bake-sale-lemon-bars/',
    isMainFeature: false,
    isButterFeature: false,
    isButtermilkFeature: true,
    isButter: false,
    isButtermilk: true,
  },{
    recipeName: 'Buttermilk Mashed Potatoes',
    imageUrl: '/recipes/mashed-potatoes.png',
    backgroundColor: 'bg-home-recipeOrange',
    recipeUrl: 'https://www.tasteofhome.com/recipes/buttermilk-mashed-potatoes/',
    isMainFeature: true,
    isButterFeature: false,
    isButtermilkFeature: false,
    isButter: false,
    isButtermilk: true,
  },{
    recipeName: 'Old-fashioned Buttermilk Doughnuts',
    imageUrl: '/recipes/donuts.png',
    backgroundColor: 'bg-home-recipeOrange',
    recipeUrl: 'https://www.tasteofhome.com/recipes/old-fashioned-buttermilk-doughnuts/',
    isMainFeature: false,
    isButterFeature: false,
    isButtermilkFeature: false,
    isButter: false,
    isButtermilk: true,
  },{
    recipeName: 'Favorite Mexican Cornbread',
    imageUrl: '/recipes/cornbread.png',
    backgroundColor: 'bg-home-recipeRed',
    recipeUrl: 'https://www.tasteofhome.com/recipes/favorite-mexican-cornbread/',
    isMainFeature: false,
    isButterFeature: false,
    isButtermilkFeature: false,
    isButter: false,
    isButtermilk: true,
  },{
    recipeName: 'Buttermilk Pie with Pecans',
    imageUrl: '/recipes/pie.png',
    backgroundColor: 'bg-home-recipeOrange',
    recipeUrl: 'https://www.tasteofhome.com/recipes/buttermilk-pie-with-pecans/',
    isMainFeature: false,
    isButterFeature: false,
    isButtermilkFeature: false,
    isButter: false,
    isButtermilk: true,
  },{
    recipeName: 'Red Velvet Cheesecake',
    imageUrl: '/recipes/red-cheesecake.png',
    backgroundColor: 'bg-home-recipeRed',
    recipeUrl: 'https://www.tasteofhome.com/recipes/red-velvet-cheesecake/',
    isMainFeature: false,
    isButterFeature: false,
    isButtermilkFeature: false,
    isButter: false,
    isButtermilk: true,
  },{
    recipeName: 'Buttermilk Cake with Caramel Icing',
    imageUrl: '/recipes/buttermilk-caramel-cake.png',
    backgroundColor: 'bg-home-recipeBlue',
    recipeUrl: 'https://www.tasteofhome.com/recipes/bake-sale-lemon-bars/',
    isMainFeature: false,
    isButterFeature: false,
    isButtermilkFeature: true,
    isButter: false,
    isButtermilk: true,
  },{
    recipeName: 'Orange Buttermilk Cupcakes',
    imageUrl: '/recipes/cupcakes.png',
    backgroundColor: 'bg-home-recipeOrange',
    recipeUrl: 'https://www.tasteofhome.com/recipes/bake-sale-lemon-bars/',
    isMainFeature: false,
    isButterFeature: false,
    isButtermilkFeature: false,
    isButter: false,
    isButtermilk: true,
  },{
    recipeName: 'Avacado Salad Dressing',
    imageUrl: '/recipes/salad-dressing.png',
    backgroundColor: 'bg-home-recipeBlue',
    recipeUrl: 'https://www.tasteofhome.com/recipes/bake-sale-lemon-bars/',
    isMainFeature: true,
    isButterFeature: false,
    isButtermilkFeature: false,
    isButter: false,
    isButtermilk: true,
  },{
    recipeName: 'Devils Food Snack Cake',
    imageUrl: '/recipes/devil-cake.png',
    backgroundColor: 'bg-home-recipeOrange',
    recipeUrl: 'https://www.tasteofhome.com/recipes/bake-sale-lemon-bars/',
    isMainFeature: false,
    isButterFeature: false,
    isButtermilkFeature: false,
    isButter: false,
    isButtermilk: true,
  },{
    recipeName: 'Blueberry Zucchini Squares',
    imageUrl: '/recipes/zucchini-squares.png',
    backgroundColor: 'bg-home-recipeRed',
    recipeUrl: 'https://www.tasteofhome.com/recipes/bake-sale-lemon-bars/',
    isMainFeature: false,
    isButterFeature: false,
    isButtermilkFeature: false,
    isButter: false,
    isButtermilk: true,
  },

];

const RecipeCard: React.FC<RecipeCardProps> = ({recipe}) => {
  return (
    <div className="flex flex-col">
      <img src={recipe.imageUrl} alt="" className="w-full rounded-t-md border-t-slate-300 border-t-[1px] border-l-slate-300 border-r-slate-300 border-l-[1px] border-r-[1px]" />
      <div className={`flex ${recipe.backgroundColor}  justify-center p-2 rounded-b-md h-[15vh] border-b-slate-300 border-b-[1px] border-l-slate-300 border-r-slate-300 border-t-slate-300 border-t-[.25px] border-l-[1px] border-r-[1px]`}>
        <Link href={recipe.recipeUrl} target="_blank"
        rel="noopener noreferrer" className="text-l flex text-white font-light mt-auto mb-auto text-center p-1 hover:underline">
            <p className="ml-4">{recipe.recipeName}</p>
            <button className="justify-right mt-auto mb-auto mr-3 ml-4 text-white">
              &gt;
            </button>
        </Link>
      </div>
    </div>
  );
}

export default RecipeCard;
