import { createContext, useState, useEffect } from "react";
import { getRecipes } from "../components/utils/request";

export const SearchContext = createContext({
  recipes: [],
  query: "",
  savedQuery: (query) => {},
});

const retrieveData = () => {
  const data = localStorage.getItem("query");
  return !!data ? data : "";
};

const SearchProvider = ({ children }) => {
  const [recipes, setRecipe] = useState([]);

  const searchQuery = retrieveData();
  const [query, setQuery] = useState(searchQuery);

  const get = async () => {
    const { recipes } = await getRecipes("", { search: query });
    setRecipe(recipes);
  };

  const savedQuery = (query) => {
    localStorage.setItem("query", query);
    setQuery(query);
  };

  useEffect(() => {
    try {
      get();
    } catch (error) {
      console.error(error);
    }
  }, [query, searchQuery]);

  return (
    <SearchContext.Provider value={{ recipes, savedQuery, query }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
