import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

import { getRecipe } from "../components/utils";

import { PrvHeader, PrvContent, PrRecipeList } from "../components";

const Preview = () => {
  const [recipe, setRecipe] = useState({});
  const params = useParams();

  const fetchingData = useCallback(async () => {
    const { recipe } = await getRecipe(params.id);
    setRecipe(() => recipe);
  }, []);

  useEffect(() => {
    try {
      fetchingData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleScroll = (event) => {
    const idTarget = event.target.dataset.tag;
    const scrollToElement = document.querySelector(`#${idTarget}`);
    scrollToElement.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
  };

  return (
    <div>
      <section className="w-[75rem] max-w-full py-14 md:px-10 px-[0.625rem]  mx-auto">
        <article className="md:px-[1.25rem] px-[0.5rem] md:grid lg:grid-areas-previews md:grid-areas-previews-1 md:grid-cols-previews  h-fit gap-4">
          <PrvHeader recipe={recipe} params={params} />
          <PrvContent recipe={recipe} scrollTo={handleScroll} />
          <div className="hidden grid-in-sidebar lg:block"></div>
        </article>
      </section>
      <PrRecipeList title="You'll Also Love" type="apple" />
    </div>
  );
};

export default React.memo(Preview);
