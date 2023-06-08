import { Link } from "react-router-dom";
import logoford from "./images/logo-ford.webp";

const Header = () => {
    return(
        <div className="container-fluid">
            <div className="row bg-body-secondary p-3">
                <div className="col-md-6">
                    <Link to={"/"} rel={"noreferrer"}><img src={logoford} alt={"logo ford"} width={60}/> </Link>
                </div>
                <div className="col-md-6 text-end">
                    <Link to={"/"} className="text-dark text-decoration-none">Buscar Tienda</Link> <Link to={"/"}
                    className="text-dark text-decoration-none">Ayuda</Link>

                </div>
            </div>
        </div>
 
    )
}

export default Header;