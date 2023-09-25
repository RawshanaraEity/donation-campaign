import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const Donation = () => {

    const [donation, setDonation] = useState([]);
    const [noDataFound, setNoDataFound] = useState(false);

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
            <div>
                {
                 noDataFound ?  <p className="flex justify-center text-lg items-center h-[80vh]"> {noDataFound} </p> 
                 : 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {
                        donation.map(data => <DonationCard key={data.id} data={data}></DonationCard>)
                    }
                 </div>


                }
            </div>
        </div>
    );
};

export default Donation;