import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { PlaceHolder } from "../components/ui";
import { COLLECTIONS, getRecipes } from "../components/utils";
import { useLoading } from "../hooks";

import { Recipe } from "../components";

const CollectionPreview = () => {
  const params = useParams();
  const isLoading = useLoading(params.id, 2);
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

  return (
    <section className="mb-[30px]">
      <div className=" bg-[#f0f0f0]">
        <div className="grid container mx-auto px-[1.25rem] py-[1.875rem] w-[1000px] max-w-[90%] md:grid-areas-layout md:grid-cols-layout grid-areas-responsive md:grid-rows-layout h-full md:gap-x-[1.25rem] gap-y-[1rem] mb-[30px]">
          <div
            className={`md:w-[300px] w-full grid-in-image ${
              isLoading ? "animate-skeleton opacity-80" : ""
            }`}
          >
            <div>
              <div className="block">
                <div className="w-full h-full"></div>
                {isLoading ? (
                  <div className="md:w-full md:h-full h-[300px]"></div>
                ) : (
                  <img
                    src={filterCollection.image_url}
                    alt={filterCollection.id}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="grid-in-actions"></div>
          <div className=" col-span-3 grid-in-body h-full ml-2">
            <div>
              <h1
                className={`${
                  isLoading
                    ? "animate-skeleton opacity-60 h-[50px] text-transparent"
                    : "text-[#333] text-[39px] leading-[50px] capitalize"
                }`}
              >
                {filterCollection.title}
              </h1>
            </div>
            <div
              className={`${
                isLoading ? "animate-skeleton opacity-60 h-[30px] w-fit text-transparent" : ""
              } mt-[15px] mr-[1.875rem] text-lg`}
            >
              100 items
            </div>
            <div className="w-full max-w-full p-[.5rem]" />
            <div
              className={`${
                isLoading
                  ? "animate-skeleton opacity-60 h-[30px] w-fit text-transparent"
                  : "text-[#be2a77]"
              }  leading-6 mt-[15px] underline text-base `}
            >
              Magazine subscription - your first 5 issues for only £5!
            </div>
            <div className="mt-[15px]">
              <p
                className={`first-letter:uppercase  text-lg leading-[27px] ${
                  isLoading
                    ? "animate-skeleton opacity-60 h-fit w-fit text-transparent"
                    : "text-[#333]"
                }`}
              >
                {filterCollection.description}
              </p>
            </div>
            <ul></ul>
          </div>
        </div>
      </div>
      <div className="w-full max-w-full p-[1.5rem]" />
      <div className="w-[1000px] mx-auto max-w-[95%] mb-[2rem] container">
        {isLoading ? (
          <PlaceHolder number={COLLECTIONS.length} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] gap-y-[1.5rem] max-w-sm mx-auto md:max-w-none md:mx-0">
            {recipes.map((recipe) => (
              <Recipe
                recipe={recipe}
                key={recipe.id}
                className="h-[150px]"
                type="collections"
                path={`/results/${recipe.id}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CollectionPreview;
