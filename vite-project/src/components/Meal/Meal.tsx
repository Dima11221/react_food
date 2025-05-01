import style from "../CategoryItem/style.module.scss";
import {Link} from "react-router-dom";
import { IMealProps } from '../../Types/Types.ts'


const Meal = (props: IMealProps) => {
  const {strMeal, strMealThumb, idMeal} = props;

  return (
    <div>
      <div className={style.CategoryItem} id={idMeal}>
        <div className="">
          <img className={style.logo} src={strMealThumb} alt={strMeal}/>
        </div>
        <div className={`${style.cardContent} ${style.left}`}>
          <h3 className={style.title}>{strMeal}</h3>
        </div>
        <div className={`${style.flex} ${style.linkStyle}`}>
          <Link to={`/meal/${idMeal}`} className={`${style.btn} ${style.linkPad}`}>
            Watch recipe
          </Link>
        </div>
      </div>
    </div>
  )
}

export { Meal }