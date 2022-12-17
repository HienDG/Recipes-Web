import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import { AiOutlineArrowRight } from "react-icons/ai";
import { SearchContext } from "../context/index";
import { useLoading } from "../hooks";

import Recipe from "./Recipe";
import { PlaceHolder } from "./ui/index";

import { getRecipes, MAX_LENGTH, MIN_LENGTH } from "./utils/";

const Recipes = ({ title, type }) => {
  const [recipes, setRecipes] = useState([]);
  const isLoading = useLoading(null, 2);

  const navigate = useNavigate();

  const searchCtx = useContext(SearchContext);
  const recipeSlices = [...recipes].slice(MIN_LENGTH, MAX_LENGTH);

  useEffect(() => {
    searchCtx.savedQuery(type);
    const get = async () => {
      const { recipes } = await getRecipes("", { search: type });
      setRecipes(recipes);
    };

    try {
      get();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleNavigation = (event) => {
    const queryId = event.target.dataset.recipe;
    searchCtx.savedQuery(queryId);
    navigate("/results");
  };

  return (
    <section className="container mx-auto my-8">
      <div className="flex cursor-pointer  justify-center mb-[2rem] lg:text-[2.25rem]  text-[1.5rem] items-center gap-4">
        <div className="capitalize hover:text-[red]" data-recipe={type} onClick={handleNavigation}>
          {title}
        </div>
        <AiOutlineArrowRight className="fill-[orange]" />
      </div>
      <div className="container mx-auto mt-4">
        <div className="w-[1200px] mx-auto max-w-full mb-[2rem]">
          {isLoading ? (
            <PlaceHolder number={MAX_LENGTH} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] gap-y-[1.5rem] max-w-sm mx-auto md:max-w-none md:mx-0">
              {recipeSlices.map((recipe) => (
                <Recipe
                  recipe={recipe}
                  key={recipe.id}
                  className="h-[200px] gap-y-2"
                  type="recipes"
                  path={`/results/${recipe.id}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Recipes;
