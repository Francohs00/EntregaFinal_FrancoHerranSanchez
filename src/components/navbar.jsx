import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink className="nav-link text-dark" aria-current="page" to={"/main"}>Main</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" aria-current="page" to={"/category/Suv"}>Suv</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" aria-current="page" to={"/category/Pick-up"}>Pick-up</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" aria-current="page" to={"/category/Auto"}>Auto</NavLink>
            </li>

        </ul>
 
    )
}

export default Navbar;