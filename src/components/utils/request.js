import axios from "axios";

const API_kEY = "e8cad743-19d4-415c-b13c-d83a89fd39b5";
const API_URL = "https://forkify-api.herokuapp.com/api/v2/recipes";

const request = axios.create({
  baseURL: API_URL,
});

export const getRecipes = async (path, option) => {
  const res = await request.get(path, {
    params: {
      ...option,
      key: API_kEY,
    },
  });
  const { data } = await res.data;
  return data;
};
