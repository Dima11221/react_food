import {Meal} from "../Meal/Meal.tsx";
import style from './style.module.scss'
import {IMealProps} from "../../Types/Types.ts";

interface IMealList {
  meals: IMealProps[],
}

const MealList = ({meals}: IMealList) => {

  return (
    <div className={style.mealList}>
      {meals.map((meal) => (
        <Meal key={meal.idMeal} {...meal} />
      ))}
    </div>
  )
}

export { MealList }