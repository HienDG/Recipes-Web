import { RecipesContext } from "../context/RecipesContext";

import { useContext } from "react";
import Recipe from "./Recipe";

const Recipes = ({ title }) => {
  const recipesCtx = useContext(RecipesContext);
  const recipeSlices = [...recipesCtx.recipes];

  return (
    <section>
      <div>
        <h1>{title}</h1>
      </div>
      <div className='container mx-auto mt-4'>
        <div className='w-[1200px] mx-auto max-w-full'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] gap-y-[1.5rem] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {recipeSlices.map((recipe) => (
              <Recipe recipe={recipe} key={recipe.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recipes;
