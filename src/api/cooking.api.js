import API from "./axios";

export const prepareCooking = async (data) => {
  const response = await API.post(
    "/cooking/preparing",
    data
  );

  return response.data;
};

export const getAiResult = async (taskId) => {
  const response = await API.get(
    `/cooking/ai-result/${taskId}`
  );

  return response.data;
};

export const startCooking = async (recipeId) => {
  const response = await API.post(
    "/cooking/start",
    {
      recipe_id: recipeId,
    }
  );

  return response.data;
};

export const finishCooking = async (data) => {
  const response = await API.post(
    "/cooking/finish",
    data
  );

  return response.data;
};