import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../api";
import Loader from "./Loader";

export default function Recipe() {
  const [recipe, setRecipe] = useState([]);
  const [showRecipe, setShowRecipe] = useState(false);
  const { id } = useParams();
  const back = useNavigate();
  const handleRecipeShow = () => {
    setShowRecipe(!showRecipe)
  }

  useEffect(() => {
    getMealById(id).then(data => setRecipe(data.meals[0]))
  }, [id])

  return (
    <div className="block">
      <button onClick={() => back(-1)} className="flex px-3 py-2 text-sm items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300" >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
        </svg>
        back
      </button>
      {!recipe.idMeal ? <Loader /> : (
        <div className="block">
          <div className="md:flex md:justify-between w-full md:my-5 my-2 animated">
            <div className="img">
              <img className="lg:max-w-lg max-w-full object-center" src={recipe.strMealThumb} alt={recipe.strMealThumb} />
            </div>
            <div className="block md:pl-7">
              <h1 className="text-xl md:text-5xl text-gray-900"><span className="font-bold">Name: </span>{recipe.strMeal}</h1>
              <p className="my-2 text-xl"><span className="font-bold">Catergory: </span>{recipe.strCategory}</p>
              {recipe.strArea ? <p className="text-xl"><span className="font-bold">Region: </span>{recipe.strArea}</p> : null}
              <p className="mt-2 text-xl"><span className="font-bold">Description: </span>{recipe.strInstructions} </p>
            </div>
          </div>
          <button onClick={handleRecipeShow} className="flex px-4 py-2 text-sm items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300" >
            Show recipe...
          </button>
          {showRecipe ? (
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow-md sm:rounded-lg">
                  <table className="min-w-full tablet">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="py-3 px-6 text-xs text-left text-gray-700 uppercase">
                          Ingredient
                        </th>
                        <th className="py-3 px-6 text-xs text-left text-gray-700 uppercase">
                          Measure
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.keys(recipe).map(key => {
                        if (key.includes('Ingredient') && recipe[key]) {
                          return (
                            <tr className="bg-white border-b " >
                              <td className="py-4 px-6 text-sm text-gray-900 whitespace-nowrap ">{recipe[key]}</td>
                              <td className="py-4 px-6 text-sm text-gray-900 whitespace-nowrap ">{recipe[`strMeasure${key.slice(13)}`]}</td>
                            </tr>
                          )
                        }
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          ) : null}

          {recipe.strYoutube ? (
            <div className="video">
              <h1 className="my-3 font-bold">Video recipe: </h1>
              <iframe
                className="max-w-full"
                width={370} 
                height={200} 
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} 
                title={id} 
                frameBorder="0" 
                allowFullScreen >
              </iframe>
            </div>
          ) : null}
        </div>
      )}
    </div>
  )
}