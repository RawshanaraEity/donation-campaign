import  { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CategoryDetailsCard from './CategoryDetailsCard';

const CategoryDetails = () => {

    const [categoryInfo, setCategoryInfo] = useState({})


    const {id} = useParams()
    const idInt = parseInt(id)
   
    
    const categoryData = useLoaderData()


   useEffect(() => {

    const findCategory = categoryData?.find(data => data.id == idInt)
    setCategoryInfo(findCategory)

   }, [idInt,categoryData])



    return (
        <div className='py-5'>
            <CategoryDetailsCard categoryInfo={categoryInfo}></CategoryDetailsCard>
        </div>
    );
};

export default CategoryDetails;