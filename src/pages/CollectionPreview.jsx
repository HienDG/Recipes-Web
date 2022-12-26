import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { BsFacebook, BsTwitter, BsFillChatFill } from "react-icons/bs";

import { LoadingSpinner, PlaceHolder, RatingStar } from "../components/ui";
import { COLLECTIONS, getRecipes } from "../components/utils";
import { useLoading } from "../hooks";

import { PrRecipeItem, HrBanner } from "../components";

const CollectionPreview = () => {
  const params = useParams();
  const isLoading = useLoading(1.5, params.id);
  const [recipes, setRecipes] = useState([]);

  const [filterCollection] = COLLECTIONS.filter((item) => item.id === params.id);

  useEffect(() => {
    const get = async () => {
      const { recipes } = await getRecipes("", { search: filterCollection.query });
      setRecipes(recipes);
    };

    try {
      get();
    } catch (error) {
      console.log(error);
    }
  }, [params.id]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <section className="overflow-hidden text-gray-600 body-font bg-white">
      <HrBanner collection={filterCollection} length={recipes.length} />
      <div className="mb-[2rem] py-24 md:px-4 px-[0.625rem] bg-white">
        <div className="w-[1200px] mx-auto max-w-full container">
          <div className="flex flex-wrap -m-4">
            {recipes.map((recipe) => (
              <PrRecipeItem
                recipe={recipe}
                key={recipe.id}
                className="h-[200px]"
                type="collections"
                path={`/results/${recipe.id}`}
                category={filterCollection.query}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionPreview;
