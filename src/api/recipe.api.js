import API from "./axios";

export const getRecipeDetail = async (id) => {
  const response = await API.get(
    `/recipes/${id}`
  );

  return response.data;
};

export const createRecipe = async (data) => {
  const response = await API.post(
    "/user/recipes",
    data
  );

  return response.data;
};

export const getMyRecipes = async () => {
  const response = await API.get(
    "/user/recipes"
  );

  return response.data;
};