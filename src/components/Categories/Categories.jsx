import CategoryCard from "../Category/CategoryCard";


const Categories = ({categories}) => {

// console.log(categories)

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
                {
                    categories.map(eachCategory => <CategoryCard key={eachCategory.id} eachCategory={eachCategory}></CategoryCard> )
                }
            </div>
        </div>
    );
};

export default Categories;