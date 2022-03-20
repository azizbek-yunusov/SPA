import MealItem from "./MealItem";

export default function MealList({meals}) {
  return(
    <div className="grid grid-cols-1 gap-2 xl:grid xl:grid-cols-4 xl:gap-4 lg:grid-cols-3 lg:gap-4 md:grid-cols-2 md:gap-2 sm:grid-cols-2 sm:gap-2 animated">
      {meals.map(meal => (
        <MealItem key={meal.idMeal} {...meal} />
      ))}
    </div>
  )
}