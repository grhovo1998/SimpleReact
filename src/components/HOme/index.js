import { useNavigate } from "react-router-dom"
import Layout from "../Layouts"
import Footer from "../Layouts/Footer"
import Header from "../Layouts/Header";


const id = "15";

const Home = () => {
    const navigate = useNavigate()

    const handleRedirect =() => {
        navigate('/about');
    }

    const handleRedirectDynamic= () => {
        navigate(`/product/${id}`);
    }

    return <>
     <Layout>
        <button onClick={handleRedirect} >Redirect me about page</button>

        <button onClick={handleRedirectDynamic} >Redirect product page</button>
     </Layout>
    </>
}

export default Home