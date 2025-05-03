export interface ICategoryItemProp {
  idCategory: string;
  strCategoryThumb: string;
  strCategory: string;
  strCategoryDescription: string;
}

export interface IMealProps {
  strMeal: string,
  strMealThumb: string,
  idMeal: string,
}

type IngredientKey = `strIngredient${ 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 }`
type MeasureKey = `strMeasure${ 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 }`

export type IRecipeProps = {
  strMealThumb: string;
  strMeal: string;
  strCategory: string;
  strArea?: string;
  strInstructions: string;
  strYoutube?: string;
} & {
  [key in IngredientKey | MeasureKey]?: string | null;
  // [key in Measure]?: string | null;
}