import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {getAllCategories} from "../../../api.ts";
import {Preloader} from "../../Preloader/Preloader.tsx";
import {CategoryList} from "../../CategoryList/CategoryList.tsx";
import {ICategoryItemProp} from "../../../Types/Types.ts";
import {Search} from "../../Search/Search.tsx";
import {Pagination} from "../../Pagination/Pagination.tsx";

const Home = () => {
  const [catalog, setCatalog] = useState<ICategoryItemProp[]>([]);
  const [filteredCatalog, setFilteredCatalog] = useState<ICategoryItemProp[]>([]);

	const [currentPage, setCurrentPage] = useState<number>(1)

	const itemsPerPage = 8;
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = currentPage * itemsPerPage;
	const currentItems = filteredCatalog.slice(startIndex, endIndex);
	const pageCount = Math.ceil(filteredCatalog.length / itemsPerPage);
	// console.log(pageCount)
	// console.log(filteredCatalog.length)

  const {pathname, search} = useLocation();
    console.log(pathname, search);

  const navigate = useNavigate();
    // console.log(navigate)

  const handleSearch = (str: string) => {
		setCurrentPage(1)
    setFilteredCatalog(
			catalog.filter((item) =>
				item.strCategory.toLowerCase().includes(str.toLowerCase())
			));
    navigate({
			pathname,
			search: `?search=${str}`,
    })
  }

  useEffect(() => {
    getAllCategories().then((data: {categories: ICategoryItemProp[]}) => {
      // console.log('data', data);
      setCatalog(data.categories);
      // console.log(search.split('='));
      // console.log(data.categories[0].strCategory);
      setFilteredCatalog(
        search ? data.categories.filter((item) =>
						item.strCategory
							.toLowerCase()
							.includes(search.split('=')[1].toLowerCase())
          ) : data.categories
      );
    });
  }, [search]);

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <div>
        {!catalog.length && (
          <>
            <Preloader />
          </>
        )}

        {catalog.length > 0 && (
          <>
            <CategoryList catalog={currentItems} />

						<Pagination currentPage={currentPage} pageCount={pageCount} setCurrentPage={setCurrentPage}/>
          </>
        )}
      </div>
    </div>
  )
}

export { Home }
