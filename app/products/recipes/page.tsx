import React from "react"
import RecipeCard, { RecipeData } from "@/app/Components/RecipeCard"

export default function Recipes({ }) {
  const butterRecipes = RecipeData.filter(recipe => recipe.isButter)
  const buttermilkRecipes = RecipeData.filter(recipe => recipe.isButtermilk)

  return (
    <>
      <div className="pt-[148px] w-[100vw] p-8">
      <div className="bg-white grid grid-cols-1 m-10 xs:m-2  text-home-blue">
        <div className="text-center xs:text-left ml-0 mr-auto">
          <h1 className="text-4xl">Recipes</h1>
          <p className="text-sm">(compiled from tasteofhome.com)</p>
        </div>
        <div className="text-center xs:text-right ml-auto mr-0 mt-10">
          <h1 className="text-2xl">Butter Recipes</h1>
          <p className="text-sm text-right">At High Desert Milk, we like to say, <br></br> &quot;There butter be butter.&quot;</p>
        </div>

      </div>
      <div className="grid grid-cols-3 gap-3 xs:grid-cols-2">
        {butterRecipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
      <div className="bg-white grid grid-cols-1 m-10 text-home-blue">
        <div className="text-left mr-auto xs:text-center">
          <h1 className="text-2xl sm:mb-4">Buttermilk Recipes</h1>
          <p className="text-sm sm:w-[50%] xs:w-full"> Discover the versatile potential of High Desert&apos;s buttermilk and non-fat milk. The udderly wonderful balance of these dairy products brings both depth and complexity to a diverse array of dishes.</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-20 xs:grid-cols-2">
        {butterRecipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
      </div>
    </>
  )
}
