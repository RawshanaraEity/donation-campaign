import React from 'react';

const DonationCard = ({data}) => {

        const {picture, title, text_btn_bg_color, description, price,category,
            category_bg_color,
            card_bg_color}  = data || {}

    return (
        <div>
            <div style={{color: text_btn_bg_color}} className="">
            <div style={{backgroundColor: card_bg_color}} className="relative flex w-full max-w-[48rem] flex-row rounded-xl  shadow-md">
                 <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none ">
                 <img className="h-full w-full object-cover" src={picture} alt="" />
                 </div>
            <div className="p-6">
            <h6 style={{backgroundColor: category_bg_color}} className="mb-4 w-24 px-4 py-2 rounded-md block font-sans text-base font-semibold ">
                 {category}
            </h6>
            <h4  className="mb-2 block text-2xl text-black font-semibold">
                {title}
             </h4>
             <p className="mb-8 block  text-xl font-medium">
                  ${price}
             </p>
            <a className="inline-block">
                 <button style={{backgroundColor:text_btn_bg_color}}
             className="flex items-center gap-2 rounded-lg py-3 px-6 text-center text-white text-sm font-bold ">
              View Details
                 </button>
             </a>
          </div>
               </div>
                 </div>
        </div>
    );
};

export default DonationCard;