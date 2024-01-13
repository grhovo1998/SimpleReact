import { useRoutes } from "react-router-dom"
import { routes } from "../Routes"
import Home from '../components/HOme';
import About from '../components/About';
import Product from '../components/Product';
const Route2 = () => {
    return <>
    {useRoutes(routes)}
    </>
}

export default Route2