import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { BsFacebook, BsTwitter, BsFillChatFill } from "react-icons/bs";

import { LoadingSpinner, PlaceHolder, RatingStar } from "../components/ui";
import { COLLECTIONS, getRecipes } from "../components/utils";
import { useLoading } from "../hooks";

import { Recipe } from "../components";

const CollectionPreview = () => {
  const params = useParams();
  const isLoading = useLoading(2, params.id);
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
    <section className="overflow-hidden text-gray-600 body-font">
      <div className="bg-[#f1f1f1]">
        <div className="container px-5 py-24 mx-auto w-[1200px] max-w-full">
          <div className="flex flex-wrap mx-auto lg:w-4/5">
            <img
              alt={filterCollection.id}
              className="object-cover object-center w-full rounded h-[400px] lg:w-1/2"
              src={filterCollection.image_url}
            />
            <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
              <h2 className="text-sm tracking-widest text-gray-500 title-font">
                Public by Hien Dang
              </h2>
              <h1 className="mb-1 text-3xl font-medium text-gray-900 title-font">
                {filterCollection.title}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <RatingStar />
                  <span className="ml-3 text-gray-600">4 Reviews</span>
                </span>
                <span className="flex gap-2 py-2 pl-3 ml-3 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <BsFacebook />
                  </a>
                  <a className="text-gray-500">
                    <BsTwitter />
                  </a>
                  <a className="text-gray-500">
                    <BsFillChatFill />
                  </a>
                </span>
              </div>
              <p className="mb-6 text-lg font-bold">{recipes.length} Recipes</p>
              <p className="text-xl leading-relaxed first-letter:uppercase">
                {filterCollection.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-full p-[1.5rem]" />
      <div className="w-[1200px] mx-auto max-w-full mb-[2rem] container md:p-4 p-[0.625rem]">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="flex flex-wrap -m-4">
            {recipes.map((recipe) => (
              <Recipe
                recipe={recipe}
                key={recipe.id}
                className="h-[200px]"
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
