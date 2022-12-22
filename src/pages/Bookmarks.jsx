import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { AiOutlineClose } from "react-icons/ai";

import { PlaceHolder, LazyImage, LoadingSpinner } from "../components/ui";
import { useLoading } from "../hooks";
import { fetchingRecipes, uploadData } from "../components/utils";

const Bookmarks = () => {
  const [recipes, setRecipes] = useState([]);
  const isLoading = useLoading(2, recipes);

  const getRecipes = async () => {
    const arr = [];
    const data = await fetchingRecipes("recipes");
    for (const key in data) {
      arr.push(data[key]);
    }
    setRecipes(() => [...arr]);
  };

  useEffect(() => {
    try {
      getRecipes();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleDelete = async (recipe) => {
    localStorage.removeItem(recipe.id);
    await uploadData("recipes", recipe.id, recipe, "DELETE");
    await getRecipes();
  };

  return (
    <section>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="container mx-auto max-w-[95%]">
          <div className="before:h-[1rem] before:block before:sticky after:h-[1rem] after:block after:sticky">
            <header className="flex py-[5px] px-5">
              <div className="flex py-[5px] px-5 container mx-auto">
                <section className="flex basis-[10px] flex-1 self-center"></section>
                <section className="flex basis-[10px] flex-[4] self-center justify-center items-center text-[2.625rem] font-bold">
                  <span>Saves</span>
                </section>
                <section className="flex basis-[10px] flex-1 self-center"></section>
              </div>
            </header>
          </div>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex border-b-[3px] border-[#a90101] border-solid">
              <p href="" className="p-[0.625rem] text-lg">
                Recipes
              </p>
            </div>
          </div>
          <article className="h-[1000px] max-w-[95%] w-[72rem] mx-auto bg-[#f5f5f5]">
            {recipes.length === 0 ? (
              <div className="h-[500px] flex items-center justify-center">
                <div className="flex flex-col gap-4 text-center">
                  <span className="text-[28px] leading-[1] text-[#1c1c1c] capitalize">
                    Find Your Saved Recipes Here
                  </span>
                  <p className="text-[#1c1c1c] tracking-[1px] mb-[12px]">
                    To save, tap the bookmark icon on a recipe.
                  </p>
                  <Link
                    to="/menu"
                    className="bg-[#1c1c1c] mt-[15px] text-base leading-[16px] text-[#fff] shadow-2xl uppercase py-[14px] px-[28px] rounded-[4px] max-w-[250px] mx-auto"
                  >
                    See our Top picks
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex flex-wrap">
                {recipes.map((recipe) => (
                  <div className="py-8 lg:w-1/3 md:w-1/2" key={recipe.id}>
                    <div className="relative h-full overflow-hidden transition border-2 border-gray-500 rounded-lg border-opacity-60 group">
                      <LazyImage
                        image={recipe.image_url}
                        title={recipe.title}
                        effect="blur"
                        wrapperClassName="w-full mx-auto flex justify-center items-center "
                        imageClassName="object-cover object-center w-full lg:h-48 md:h-36"
                      />
                      <div className="absolute top-[1rem]  -right-11 group-hover:right-0 p-2 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button onClick={handleDelete.bind(null, recipe)}>
                          <div className="flex justify-center items-center text-[#000] w-12 h-12 ">
                            <AiOutlineClose className="text-2xl hover:fill-[#D54215]" />
                          </div>
                        </button>
                      </div>
                      <div className="p-6">
                        <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-400 uppercase title-font">
                          publisher: <span className="capitalize">{recipe.publisher}</span>
                        </h2>
                        <h1 className="mb-3 text-lg font-medium text-gray-900 capitalize title-font h-[56px] overflow-hidden flex items-center">
                          {recipe.title}
                        </h1>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </article>
        </div>
      )}
    </section>
  );
};

export default Bookmarks;
