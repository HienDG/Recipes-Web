import { useLocation } from "react-router-dom";

import { useLoading } from "../hooks";
import { PlaceHolder } from "../components/ui";
import { COLLECTIONS } from "../components/utils";
import Recipe from "../components/Recipe";

const Collections = () => {
  const location = useLocation(null, 2);

  const isLoading = useLoading(location.pathname);

  return (
    <section className="mb-8 my-10">
      <div className="flex cursor-pointer max-w-[95%] mx-auto  justify-center mb-[2rem] lg:text-[2.25rem]  text-[1.5rem] items-center gap-4">
        <div className="capitalize text-center">Most popular recipe collections this week</div>
      </div>
      <div className="w-[1200px] mx-auto max-w-[95%] mb-[2rem] container">
        {isLoading ? (
          <PlaceHolder number={COLLECTIONS.length} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] gap-y-[1.5rem] max-w-sm mx-auto md:max-w-none md:mx-0">
            {COLLECTIONS.map((item) => (
              <Recipe
                recipe={item}
                key={item.id}
                className="h-[150px]"
                type="collections"
                path={item.path}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Collections;
