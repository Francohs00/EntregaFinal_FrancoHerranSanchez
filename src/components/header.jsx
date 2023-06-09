import { Link } from "react-router-dom";
import logoford from "./images/logo-ford.webp";
import bag from "./images/bag-dash-fill.svg";

const Header = () => {
    return(
        <div className="container-fluid">
            <div className="row bg-body-secondary p-3">
                <div className="col-md-6">
                    <Link to={"/"} rel={"noreferrer"}><img src={logoford} alt={200} width={200}/> </Link>
                </div>
                <div className="col-md-6 text-end">
                    <Link to={"/"} className="text-dark text-decoration-none">Buscar Tienda</Link> <Link to={"/"}
                    className="text-dark text-decoration-none">Ayuda</Link>

                </div>
                <div>
                    <button type="button" class="btn btn-ligth position-relative">
                    <img src={bag} alt="carrito" width={20} />
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">  1
                    </span>
                    </button>
                </div>
            </div>
        </div>
 
    )
}

export default Header;