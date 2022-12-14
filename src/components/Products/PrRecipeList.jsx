import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import { AiOutlineArrowRight } from "react-icons/ai";
import { SearchContext } from "../../context/index";

import PrRecipeItem from "./PrRecipeItem";

import { getRecipes, MIN_LENGTH } from "../utils/";

const PrRecipeList = ({ title, type }) => {
  const [recipes, setRecipes] = useState([]);

  const navigate = useNavigate();

  const searchCtx = useContext(SearchContext);
  const recipeSlices = [...recipes].slice(MIN_LENGTH, 6);

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
    <section className="text-gray-600 body-font bg-white">
      <div className="container px-5 py-24 mx-auto w-[1200px] max-w-full">
        <div className="flex items-center justify-center gap-4 mb-10 group">
          <h2
            className="text-2xl font-bold hover:text-black group-hover:cursor-pointer"
            onClick={handleNavigation}
            data-recipe={type}
          >
            {title}
          </h2>
          <AiOutlineArrowRight className="text-2xl fill-[#48BB78]" />
        </div>
        <div className="flex flex-wrap -m-4">
          {recipeSlices.map((recipe) => (
            <PrRecipeItem
              key={recipe.id}
              type="recipes"
              path={`/results/${recipe.id}`}
              recipe={recipe}
              category={type}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrRecipeList;
