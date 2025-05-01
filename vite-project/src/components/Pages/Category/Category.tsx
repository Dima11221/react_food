import {useEffect, useState} from "react";
import {useParams, useNavigate, useLocation} from "react-router-dom";
import { getFilteredCategory } from "../../../api.ts";
import {Preloader} from "../../Preloader/Preloader.tsx";
import {MealList} from "../../MealList/MealList.tsx";
import {IMealProps} from "../../../Types/Types.ts";

const Category = () => {
  const {name} = useParams<{name?: string}>();
  const [meals, setMeals] = useState<IMealProps[]>([])

  const navigate = useNavigate();
  // console.log(navigate)
  const location = useLocation();
  console.log(location)
  // const value2 = useMatch();
  // console.log(value2)
  const goBack = () => {
    navigate(-1);
  }

  useEffect(() => {
    if (name){
      getFilteredCategory({catName: name}).then((data) => {
        setMeals(data.meals || [])
        // console.log(data.meals)
      });
    }
  }, [name]);

  return (
    <>
      <button onClick={goBack}>Go back</button>

      {!meals.length && (
        <Preloader />
      )}

      {meals.length && (
        <MealList meals={meals} />
      )}


    </>

  )
}

export { Category }