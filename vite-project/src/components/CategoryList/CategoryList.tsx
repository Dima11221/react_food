import {CategoryItem} from "../CategoryItem/CategoryItem.tsx";
import {ICategoryItemProp} from "../../Types/Types.ts";
import style from "../CategoryList/style.module.scss"

interface ICategoryListProps {
  catalog: ICategoryItemProp[];
}

const CategoryList = ({catalog = []}: ICategoryListProps) => {

  return (
    <div className={style.listItems}>
      {catalog.map((el) => (
        <CategoryItem key={el.idCategory} {...el} />
      ))}
    </div>
  )
}

export { CategoryList }
