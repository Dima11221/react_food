import {useEffect, useState} from "react";
import {useParams, useNavigate, useLocation} from "react-router-dom";
import { getFilteredCategory } from "../../../api.ts";
import {Preloader} from "../../Preloader/Preloader.tsx";
import {MealList} from "../../MealList/MealList.tsx";
import {IMealProps} from "../../../Types/Types.ts";
import style from './style.module.scss'
import {Pagination} from "../../Pagination/Pagination.tsx";

const Category = () => {
  const {name} = useParams<{name?: string}>();
  const [meals, setMeals] = useState<IMealProps[]>([])
	const [currentPage, setCurrentPage] = useState<number>(1)

  const navigate = useNavigate();
  // console.log(navigate)
  const {pathname, search} = useLocation();
  console.log(pathname, search)
  // const value2 = useMatch();
  // console.log(value2)
  const goBack = () => {
    navigate(-1);
  }

	const itemsPerPage = 8;
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = currentPage * itemsPerPage;
	const currentItems = meals.slice(startIndex, endIndex);
	const pageCount = Math.ceil(meals.length / itemsPerPage);

  useEffect(() => {
		setCurrentPage(1)
    if (name){
      getFilteredCategory({catName: name}).then((data) => {
        setMeals(data.meals || [])
        // console.log(data.meals)
      });
    }
  }, [name]);

  return (
    <div>
      <button
          className={`${style.btn} ${style.btnPos} ${style.btnReset}`}
          onClick={goBack}
      >
        Go back
      </button>

      {!meals.length && (
        <Preloader />
      )}

      {meals.length > 0 && (
				<>
        	<MealList meals={currentItems} />

					<Pagination currentPage={currentPage} pageCount={pageCount} setCurrentPage={setCurrentPage} />
				</>
      )}
    </div>
  )
}

export { Category }
