import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const Donation = () => {

    const [donation, setDonation] = useState([]);
    const [noDataFound, setNoDataFound] = useState(false);
    const [isShow, setIsShow] = useState(false)

    useEffect(() =>{
        const donationItems = JSON.parse(localStorage.getItem('donations'))

        if(donationItems){
            setDonation(donationItems)
        }
        else{
            setNoDataFound('Sorry You Have No Donation Yet')
        }
    },[])


    return (
        <div>
            <div className="pb-10 mx-5">
                {
                 noDataFound ?  <p className="flex justify-center text-lg items-center h-[80vh]"> {noDataFound} </p> 
                 : 
                 <div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {
                      isShow?  donation.map(data => <DonationCard key={data.id} data={data}></DonationCard>)
                      : donation.slice(0,4).map(data => <DonationCard key={data.id} data={data}></DonationCard>)
                    }
                    </div>
                    {
                    donation.length > 4 && <button onClick={() => setIsShow(!isShow)} className="bg-green-600 rounded-md font-medium text-xl py-2 text-white mx-auto px-5  mt-5 block">{isShow ? 'See Less' : 'See All'}</button> 
                    }
                 </div>
                }
            </div>
        </div>
    );
};

export default Donation;