import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import { RatingStar, LazyImage, PlaceHolder } from "../components/ui";
import { COLLECTIONS, TWO_THOUSAND_MILLISECOND } from "../components/utils";
import { SearchContext } from "./../context";

const Collections = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const searchCtx = useContext(SearchContext);

  useEffect(() => {
    const timeout = function () {
      setIsLoading(true);
      return new Promise(function (res, _) {
        setTimeout(function () {
          res();
        }, TWO_THOUSAND_MILLISECOND);
      });
    };

    timeout().finally(() => {
      setIsLoading(false);
    });

    return () => {
      clearTimeout(timeout);
    };
  }, [location.pathname]);

  const handleNavigate = (query) => {
    searchCtx.savedQuery(query);

    navigate("/results");
  };

  return (
    <section className="mb-8 my-10">
      <div className="flex cursor-pointer  justify-center mb-[2rem] lg:text-[2.25rem]  text-[1.5rem] items-center gap-4">
        <div className="capitalize">Most popular recipe collections this week</div>
      </div>
      <div className="w-[1100px] mx-auto max-w-[95%] mb-[2rem] container">
        {isLoading ? (
          <PlaceHolder number={COLLECTIONS.length} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] gap-y-[1.5rem] max-w-sm mx-auto md:max-w-none md:mx-0">
            {COLLECTIONS.map((item) => (
              <div
                className="cursor-pointer"
                key={item.query}
                onClick={handleNavigate.bind(null, item.query)}
              >
                <div className="border border-[#e4e4e4] h-[300px] relative overflow-hidden group transition ">
                  <div className="w-full h-full flex justify-center items-center">
                    <LazyImage image={item.url} effect="blur" />
                  </div>
                </div>
                <div className="text-[#000] border border-[#e4e4e4] h-[130px] grid grid-row-1 place-items-center place-content-around">
                  <div className="text-sm text-[rgba(0,0,0,.65)] mb-[0.5rem] uppercase">
                    {item.query}
                  </div>
                  <div className="hover:underline">
                    <h2 className="font-semibold mb-1 text-[1.25rem]  first-letter:uppercase text-center">
                      {item.title}
                    </h2>
                  </div>
                  <RatingStar />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Collections;
