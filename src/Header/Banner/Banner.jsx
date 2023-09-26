import { useEffect, useState } from "react";
import Categories from "../../components/Categories/Categories";


const Banner = ({categories}) => {
  

  const [input, setInput] = useState('')
  const [filterCategory, setCategory] = useState([])

  useEffect(() =>{

    const categoryCard = categories.map(category => <Categories key={category.id} category={category}></Categories>)
    setCategory(categoryCard)

  },[categories])

  

  const handleSearch = () =>{

    const filterItem = categories.filter((item) => item.category.toLowerCase().includes(input.toLocaleLowerCase()))

    const categoryCards = filterItem.map(category => <Categories key={category.id} category={category}></Categories>)
    setCategory(categoryCards)
   
  }
  
  return (
    <div>
      <div
        className="hero min-h-[80vh]"
        style={{ backgroundImage: "url(/public/img/bg.png)" }}
      >
        <div className="hero-overlay bg-white bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-10 text-3xl text-black lg:text-5xl font-bold">
              I Grow By Helping People In Need
            </h1>
            
            <div className="w-60 md:w-80 lg:w-1/2 mx-auto text-black relative">
              <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
                type="text"
                placeholder="search here...."
                className="input input-bordered w-full pr-16"
              />
              <button onClick={handleSearch}  className="btn bg-red-500 text-white border-none absolute top-0 right-0 rounded-l-none">
                Search
              </button>
            </div>
            </div>
        </div>
      </div>

      {
        <Categories filterCategory={filterCategory}></Categories>
      }
    </div>
  );
};

export default Banner;
