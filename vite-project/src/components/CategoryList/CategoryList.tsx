import {CategoryItem} from "../CategoryItem/CategoryItem.tsx";
import {ICategoryItemProp} from "../../Types/Types.ts";
import style from './style.module.scss';

interface ICategoryListProps {
  catalog: ICategoryItemProp[];
}

const CategoryList = ({catalog = []}: ICategoryListProps) => {


  return (
    <div className={style.goodsList}>
      {catalog.map((el) => (
        <CategoryItem key={el.idCategory} {...el} />
      ))}
    </div>
  )
}

export { CategoryList }