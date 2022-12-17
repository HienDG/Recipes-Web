import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { AiOutlineClose } from "react-icons/ai";

import { PlaceHolder, RatingStar, LazyImage } from "../components/ui";
import { useLoading } from "../hooks";
import { fetchingRecipes, uploadData } from "../components/utils";

const Bookmarks = () => {
  const [recipes, setRecipes] = useState([]);
  const isLoading = useLoading(recipes, 2);

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
        <div className="flex justify-center items-center gap-4 mb-4">
          <div className="flex border-b-[3px] border-[#a90101] border-solid">
            <p href="" className="p-[0.625rem] text-lg">
              Recipes
            </p>
          </div>
        </div>
        <article className="h-[1000px] max-w-[95%] w-[72rem] mx-auto bg-[#f5f5f5]">
          {isLoading ? (
            <PlaceHolder number={recipes.length} />
          ) : recipes.length === 0 ? (
            <div className="h-[500px] flex items-center justify-center">
              <div className="text-center flex gap-4 flex-col">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] gap-y-[1.5rem] max-w-sm mx-auto md:max-w-none md:mx-0 p-[0.625rem]">
              {recipes.map((recipe) => (
                <div key={recipe.id} className="cursor-pointer bg-white">
                  <div className="border border-[#e4e4e4] h-[300px] relative overflow-hidden group transition ">
                    <div className="w-full h-full flex justify-center items-center">
                      <LazyImage image={recipe.image_url} effect="blur" />
                    </div>
                    <div className="absolute top-0 -right-11 group-hover:right-0 p-2 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <button onClick={handleDelete.bind(null, recipe)}>
                        <div
                          className="flex justify-center items-center text-[#000] w-12 h-12"
                          title="Delete"
                        >
                          <AiOutlineClose className="text-3xl fill-black hover:fill-red-600" />
                        </div>
                      </button>
                    </div>
                  </div>
                  <div
                    className={`text-[#000] border border-[#e4e4e4] h-[200px] gap-y-2 grid grid-row-1 place-items-center place-content-around`}
                  >
                    <div className="text-sm text-[rgba(0,0,0,.65)] mb-[0.5rem] uppercase">
                      {recipe.publisher || recipe.query}
                    </div>
                    <Link className="hover:underline" to={`/results/${recipe.id}`}>
                      <h2 className="font-semibold mb-1 text-[1.25rem] first-letter:uppercase text-center">
                        {recipe.title}
                      </h2>
                    </Link>
                    <RatingStar />
                  </div>
                </div>
              ))}
            </div>
          )}
        </article>
      </div>
    </section>
  );
};

export default Bookmarks;
