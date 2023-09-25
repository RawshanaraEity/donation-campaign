import React from "react";

const CategoryCard = ({ eachCategory }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_btn_bg_color,
  } = eachCategory;

  return (
    <div style={{backgroundColor: card_bg_color}} >
      <div className=" flex  flex-col rounded-xl   text-gray-700 shadow-md">
        <div className="  h-40 overflow-hidden  bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img src={picture} />
        </div>
        <div className="p-6">

        <p className="block rounded-md px-4 py-2 text-base font-medium" style={{backgroundColor: category_bg_color}}>
            {category}
          </p>
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h5>
          
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
