import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {getAllCategories} from "../../../api.ts";
import {Preloader} from "../../Preloader/Preloader.tsx";
import {CategoryList} from "../../CategoryList/CategoryList.tsx";
import {ICategoryItemProp} from "../../../Types/Types.ts";
import {Search} from "../../Search/Search.tsx";

const Home = () => {
  const [catalog, setCatalog] = useState<ICategoryItemProp[]>([]);
  const [filteredCatalog, setFilteredCatalog] = useState<ICategoryItemProp[]>([]);

  const {pathname, search} = useLocation();
    console.log(pathname, search);

  const navigate = useNavigate();
    // console.log(navigate)

  const handleSearch = (str: string) => {
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
      console.log(search.split('='));
      // console.log(data.categories[0].strCategory);
      setFilteredCatalog(
        search
          ? data.categories.filter((item) =>
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

        {catalog.length && (
          <>
            <CategoryList catalog={filteredCatalog} />
          </>
        )}
      </div>
    </div>
  )
}

export { Home }