import API from "./axios";

export const getDashboard = async () => {
  const response = await API.get(
    "/user/dashboard"
  );

  return response.data;
};

export const getRecommendations = async () => {
  const response = await API.get(
    "/user/dashboard/recommendations"
  );

  return response.data;
};

export const getSavedIngredients = async () => {
  const response = await API.get(
    "/user/saved-ingredients"
  );

  return response.data;
};