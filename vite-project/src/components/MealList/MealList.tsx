import {Meal} from "../Meal/Meal.tsx";
import style from "../MealList/style.module.scss";
import {IMealProps} from "../../Types/Types.ts";

interface IMealList {
  meals: IMealProps[],
}

const MealList = ({meals}: IMealList) => {

  return (
    <div className={`${style.listItems}`}>
      {meals.map((meal) => (
        <Meal key={meal.idMeal} {...meal} />
      ))}
    </div>
  )
}

export { MealList }
