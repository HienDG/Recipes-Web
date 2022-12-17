import axios from "axios";

const API_kEY = "e8cad743-19d4-415c-b13c-d83a89fd39b5";
const API_URL = "https://forkify-api.herokuapp.com/api/v2/recipes";
const API_FIRE_BASE = "https://cafe-f46b6-default-rtdb.asia-southeast1.firebasedatabase.app/";

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

export const uploadData = async (tag, id, data, method = "PUT") => {
  const url = `${API_FIRE_BASE}/${tag}/${id}.json`;
  const res = await fetch(url, {
    method: method,
    body: JSON.stringify(data),
  });
  const recipe = await res.json();
  return recipe;
};

export const fetchingRecipes = async (tag) => {
  const url = `${API_FIRE_BASE}/${tag}.json`;
  const res = await fetch(url, {
    method: "GET",
  });
  const recipes = await res.json();
  return recipes;
};
