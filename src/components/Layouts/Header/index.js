import { Link } from "react-router-dom";
import { headerData } from "./data";
import './styles.css'

const Header = () => {
    return <div className="nav"> 
        {headerData.map(({title, path} )=> (
            <Link to={path}>{title}</Link>
        ))}
    </div>
}

export default Header