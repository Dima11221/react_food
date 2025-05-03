import {useParams, useNavigate} from "react-router-dom";
import { getMealById } from "../../../api.ts";
import {useEffect, useState} from "react";
import {Preloader} from "../../Preloader/Preloader.tsx";
import {IRecipeProps} from "../../../Types/Types.ts";
import style from "./style.module.scss"

const Recipe = () => {
  const {id} = useParams<{id?: string}>();
	console.log({id})
  const [recipe, setRecipe] = useState<IRecipeProps | null>(null);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1)
  }


  const extractIngredients = (recipe: IRecipeProps) => {
    // console.log(Object.keys(recipe))
    return Object.keys(recipe).map(key => {
      if (key.includes("Ingredient") && recipe[key as keyof IRecipeProps]) {
        const index = key.slice(13)
        // console.log(index)
        const measureKey = `strMeasure${index}` as keyof IRecipeProps
        // console.log(measureKey)
        // console.log(recipe[key])
        return (
					<tr key={key}>
						<td>{recipe[key as keyof IRecipeProps]}</td>
						<td>
							{
								recipe[measureKey]
							}
						</td>
					</tr>
        )
      }
      return null;
    });
  }

  useEffect(() => {
    getMealById({mealId: id}).then(data => {
      setRecipe(data.meals[0]);
      // console.log(data);
    })
  }, [id]);

  return (
    <>
      <button
				className={`${style.btn} ${style.btnPos} ${style.btnReset}`}
				onClick={goBack}
      >
        Go back
      </button>

      <div>
        {!recipe && (
            <Preloader />
        )}
        {recipe && (
					<div className={style.recipeWrapper}>
						<div className={style.recipeInfo}>
							<img className={style.imgVid} src={recipe.strMealThumb} alt={recipe.strMeal} />
							<div>
								<h1>{recipe.strMeal}</h1>
								<h3>Category: {recipe.strCategory}</h3>

								{recipe.strArea ? <h3>Area: {recipe.strArea}</h3>: null}
								<p>{recipe.strInstructions}</p>
							</div>
						</div>
						<div className={style.recipeInfo}>
							{
								recipe.strYoutube ?
									(
										<div>
											<h3 className={style.videoRecTitle}>Video Recipe: </h3>
											<iframe
												className={style.imgVid}
												title={id}
												src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
												allowFullScreen
											/>
										</div>

									) : null
							}
							<table className={style.table}>
								<thead>
									<tr>
										<th>
											Ingredient
										</th>
										<th>
											Measure
										</th>
									</tr>
								</thead>
								<tbody className={style.tableStyle}>
									{recipe && extractIngredients(recipe)}
								</tbody>
							</table>
						</div>
					</div>
        )}
      </div>
    </>
  )
}

export { Recipe }
