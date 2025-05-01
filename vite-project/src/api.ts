import {API_URL} from "./config.ts";

interface IApiResponse {
  mealId?: string;
  catName?: string;
}

const getMealById = async ({mealId}:IApiResponse) => {
  const response = await fetch (API_URL + 'lookup.php?i=' + mealId);
  return await response.json();
}

const getAllCategories = async () => {
  const response = await fetch (API_URL + 'categories.php');
  if (!response.ok) {
    throw new Error('No Categories');
  }
  return await response.json();
}

const getFilteredCategory = async ({catName}: IApiResponse) => {
  const response = await fetch (API_URL + 'filter.php?c=' + catName);
  return await response.json();
}

export { getMealById, getAllCategories, getFilteredCategory }