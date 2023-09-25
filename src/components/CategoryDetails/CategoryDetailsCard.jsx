

const CategoryDetailsCard = ({categoryInfo}) => {

    const {picture, title, text_btn_bg_color, description, price} = categoryInfo || {};
    return (
        <div className='w-2/3 mx-auto'>
            <div className='relative'>
                <img className='w-full' src={picture} alt="" />
                <button style={{backgroundColor: text_btn_bg_color}} className='btn text-white font-semibold text-xl absolute bottom-10 left-10 border-none'>Donate ${price}</button>
            </div>
            <h2 className='my-5 text-4xl font-bold'>{title}</h2>
            <p className='text-lg font-normal'>{description}</p>
        </div>
    );
};

export default CategoryDetailsCard;