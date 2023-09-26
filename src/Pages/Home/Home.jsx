
import Banner from '../../Header/Banner/Banner';
import { useLoaderData } from 'react-router-dom';


const Home = () => {

    const categories = useLoaderData()

    return (
        <div>
            <Banner categories={categories}></Banner>
        </div>
    );
};

export default Home;