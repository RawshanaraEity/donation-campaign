import { Link } from "react-router-dom";

const CategoryCard = ({eachCategory}) => {

  
  const {
    id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_btn_bg_color,
  } = eachCategory.props.category || {};



  return (
   <Link to={`categories/${id}`}>
    <div>
      <div style={{backgroundColor: card_bg_color}} className=" flex  flex-col rounded-xl shadow-md">
        <div className="  h-40 overflow-hidden bg-clip-borde shadow-lg shadow-blue-gray-500/40">
          <img className="w-full" src={picture} />
        </div>
        <div style={{color: text_btn_bg_color}} className="p-6">

        <p className=" w-24 mb-3 rounded-md px-4 py-2 text-base font-medium" style={{backgroundColor: category_bg_color}}>
            {category}
          </p>
          <h5 className="mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h5> 
        </div>
      </div>
    </div>
   </Link>
  );
};

export default CategoryCard;
