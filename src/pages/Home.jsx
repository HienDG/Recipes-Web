import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../context";

import { PrRecipeList, HrTop, HrMiddle, PrCollections } from "../components";

const Home = () => {
  const searchCtx = useContext(SearchContext);
  const navigate = useNavigate();

  const handleNavigation = (query) => {
    searchCtx.savedQuery(query);
    navigate("/results");
  };

  return (
    <div>
      <HrTop handleNav={handleNavigation} title="cake" />
      <PrCollections maxLength={3} />
      <HrMiddle handleNav={handleNavigation} title="ham" />
      <PrRecipeList title="Showstopping Main Dishes" type="beef" />
    </div>
  );
};

export default Home;
