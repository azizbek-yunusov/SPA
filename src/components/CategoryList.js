import CategoryItem from "./CategoryItem";

export default function CategoryList({ catalog = [] }) {
  
  return (
    <div className="block">
      <div className="flex flex-col items-center xl:grid-cols-4 xl:gap-4 lg:grid-cols-3 lg:gap-4 md:grid-cols-2 md:gap-2 sm:grid sm:grid-cols-2 sm:gap-2 animated">
        {catalog.map(elmt => (
          <CategoryItem key={elmt.idCategory} {...elmt} />
        ))}
      </div>
    </div>
  )
}