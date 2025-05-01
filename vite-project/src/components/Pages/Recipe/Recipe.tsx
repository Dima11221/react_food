import {useParams, useNavigate} from "react-router-dom";
import { getMealById } from "../../../api.ts";
import {useEffect, useState} from "react";
import {Preloader} from "../../Preloader/Preloader.tsx";

const Recipe = () => {
  const {id} = useParams();
  const [recipe, setRecipe] = useState({});
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1)
  }

  useEffect(() => {
    getMealById({mealId: id}).then(data => {
      setRecipe(data.meals[0]);
      // console.log(data);
    })
  }, [id]);

  return (
    <>
      {!recipe && (
        <Preloader />
      )}
      {recipe && (
        <div>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1>{recipe.strMeal}</h1>
          <h6>Category: {recipe.strCategory}</h6>

          {recipe.strArea ? <h6>Area: {recipe.strArea}</h6>: null}
          <p>{recipe.strInstructions}</p>

          {recipe.strYoutube ?
            (
              <div>
                <h5>Video Recipe</h5>
                <iframe title={id} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen />
              </div>

            ) : null}
        </div>
      )}

      <button onClick={goBack}>Go back</button>
    </>
  )
}

export { Recipe }