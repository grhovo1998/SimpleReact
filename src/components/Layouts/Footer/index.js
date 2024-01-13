import { Link } from "react-router-dom";
import { headerData } from "./data";
import './styles.css'

const Footer = () => {
    return <div className="footer"> 
        {headerData.map(({title, path} )=> (
            <Link to={path}>{title}</Link>
        ))}
    </div>
}

export default Footer