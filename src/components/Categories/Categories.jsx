import CategoryCard from "../Category/CategoryCard";


const Categories = ({filterCategory}) => {
    

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10 mx-5 lg:mx-0">
                {
                    filterCategory.map(eachCategory => <CategoryCard key={eachCategory.id} eachCategory={eachCategory}></CategoryCard> )

                }
            </div>
        </div>
    );
};

export default Categories;