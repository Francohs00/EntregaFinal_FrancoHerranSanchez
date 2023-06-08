import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink className="nav-link text-dark" aria-current="page" to={"/main"}>Main</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" aria-current="page" to={"/category/suv"}>Suv</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" aria-current="page" to={"/category/pick-up"}>Pick-up</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" aria-current="page" to={"/category/auto"}>Auto</NavLink>
            </li>

        </ul>
 
    )
}

export default Navbar;