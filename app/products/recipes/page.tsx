import React from "react"
import RecipeCard, { RecipeData } from "@/app/Components/RecipeCard"

export default function Recipes({ }) {
  const butterRecipes = RecipeData.filter(recipe => recipe.isButter)
  const buttermilkRecipes = RecipeData.filter(recipe => recipe.isButtermilk)

  return (
    <>
      <div className="pt-[148px] min-w-[640px] p-8 lg:pl-[5vw] lg:pr-[5vw]">
      <div className="bg-white grid grid-cols-1 m-10 font-sans text-home-blue">
        <div className="text-center ml-0 mr-auto">
          <h1 className="text-4xl">Recipes</h1>
          <p className="text-sm">(compiled from tasteofhome.com)</p>
        </div>
        <div className="text-center ml-auto mr-0 mt-10">
          <h1 className="text-2xl">Butter Recipes</h1>
          <p className="text-sm text-right">At High Desert Milk, we like to say, <br></br> &quot;There butter be butter.&quot;</p>
        </div>

      </div>
      <div className="grid grid-cols-3 gap-3">
        {butterRecipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
      <div className="bg-white grid grid-cols-1 m-10 font-sans text-home-blue">
        <div className="text-left ml-0 mr-auto">
          <p className="text-sm max-w-[40%]"><span className="text-2xl ml-5">Buttermilk Recipes</span><br></br> Discover the versatile potential of High Desert&apos;s buttermilk and non-fat milk. The udderly wonderful balance of these dairy products brings both depth and complexity to a diverse array of dishes.</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-20">
        {butterRecipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
      </div>
    </>
  )
}
