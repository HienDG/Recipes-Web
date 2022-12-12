import { createContext, useState, useEffect } from "react";
import { getRecipes } from "../components/utils/request";

export const SearchContext = createContext({
  recipes: [],
  isLoading: false,
  query: "",
  savedQuery: (query) => {},
});

const retrieveData = () => {
  const data = localStorage.getItem("query");
  return !!data ? data : "";
};

const SearchProvider = ({ children }) => {
  const [recipes, setRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchQuery = retrieveData();
  const [query, setQuery] = useState(searchQuery);

  const get = async () => {
    setIsLoading((prevState) => !prevState);
    const { recipes } = await getRecipes("", { search: query });
    setRecipe(recipes);
    setIsLoading((prevState) => !prevState);
  };

  const savedQuery = (query) => {
    localStorage.setItem("query", query);
    setQuery(query);
  };

  useEffect(() => {
    try {
      get();
    } catch (error) {
      console.log(error);
    }
  }, [query, searchQuery]);

  return (
    <SearchContext.Provider value={{ recipes, isLoading, savedQuery, query }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
