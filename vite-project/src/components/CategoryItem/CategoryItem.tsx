import { Link } from "react-router-dom";
import {ICategoryItemProp} from "../../Types/Types.ts";
import style from './style.module.scss'

const CategoryItem = (props: ICategoryItemProp) => {
  const {idCategory, strCategory, strCategoryDescription, strCategoryThumb} = props;

  return (
    <div className={style.CategoryItem} id={idCategory}>
      <div className="">
        <img className={style.logo} src={strCategoryThumb} alt={strCategory}/>
      </div>
      <div className={`${style.cardContent} ${style.left}`}>
        <h3 className={style.title}>{strCategory}</h3>
        <p>{strCategoryDescription.slice(0, 60)}...</p>
      </div>
      <div className={`${style.flex} ${style.linkStyle}`}>
        <Link to={`/category/${strCategory}`} className={`${style.btn} ${style.linkPad}`}>
          Watch category
        </Link>
      </div>
    </div>
  )
}

export { CategoryItem }