
import swal from "sweetalert";


const CategoryDetailsCard = ({categoryInfo}) => {

    const {id,picture, title, text_btn_bg_color, description, price} = categoryInfo || {};


    const handleAddToDonation = () =>{
        const addedDonationItems = [];


        const donationItems = JSON.parse(localStorage.getItem('donations'));

        if(!donationItems){
            addedDonationItems.push(categoryInfo);
            localStorage.setItem('donations', JSON.stringify(addedDonationItems));
            swal("Good job!", "You Donate Successfully", "success");
        }
        else{
            const isExists = donationItems.find(item => item.id === id) 
            if(!isExists){
                addedDonationItems.push(...donationItems,categoryInfo)
                localStorage.setItem('donations',JSON.stringify(addedDonationItems))
                swal("Good job!", "You Donate Successfully", "success");
            }
            else{
                swal("Sorry", "Already Donate", "error");
            }
          
        }

    }


    return (
        <div className='w-full lg:w-2/3 mx-auto px-5 lg:px-0'>
            <div className='hero relative'>
                <img className='w-full z-0' src={picture} alt="" />
                <a>
                <button onClick={() => handleAddToDonation()} style={{backgroundColor: text_btn_bg_color}} className='btn text-white  z-20 font-medium lg:font-semibold text-sm md:text-base lg:text-xl absolute bottom-0 md:bottom-4 lg:bottom-10 left-0  md:left-5 lg:left-10 border-none'>Donate ${price}</button>
                </a>
                <div className="z-10 h-14 md:h-20 lg:h-32 w-full hero-overlay bg-opacity-50 absolute bottom-0"></div>
            </div>
            <h2 className='my-5 text-4xl font-bold'>{title}</h2>
            <p className='text-lg font-normal'>{description}</p>
        </div>
    );
};

export default CategoryDetailsCard;


