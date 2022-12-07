import { createContext, useState, useEffect } from "react";
import { getRecipes } from "../components/utils/request";

export const RecipesContext = createContext({ recipes: [], isLoading: false });

const RecipesProvider = ({ children }) => {
  const [recipes, setRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const get = async () => {
    setIsLoading(true);
    const { recipes } = await getRecipes("", { search: "pizza" });
    setRecipe(recipes);
    setIsLoading(false);
  };

  useEffect(() => {
    try {
      get();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <RecipesContext.Provider value={{ recipes, isLoading }}>{children}</RecipesContext.Provider>
  );
};

export default RecipesProvider;
