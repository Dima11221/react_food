import { useState, useEffect } from "react";
import {getAllCategories} from "../../../api.ts";
import {Preloader} from "../../Preloader/Preloader.tsx";
import {CategoryList} from "../../CategoryList/CategoryList.tsx";
import {ICategoryItemProp} from "../../../Types/Types.ts";


const Home = () => {
  const [catalog, setCatalog] = useState<ICategoryItemProp[]>([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      // console.log('data', data);
      setCatalog(data.categories)
    });
  }, []);

  return (
    <div>

      <div>
        {!catalog.length && (
          <>
            <Preloader />
          </>
        )}

        {catalog.length && (
          <>
            <CategoryList catalog={catalog} />
          </>
        )}
      </div>
    </div>
  )
}

export { Home }