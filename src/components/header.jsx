import CartWidget from "./CartWidget";
import NavBar from "./navbar";
import logoford from "./images/logo-ford.webp";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-body-secondary p-3">
                <div className="col-md-6">
                <Link to={"/"} rel={"noreferrer"}><img src={logoford} alt={200} width={200}/> </Link>
                </div>
                <div className="col-md-6 text-end">
                    <Link to={"/"} className="text-dark text-decoration-none">Buscar Agencia</Link> | <Link to={"/"} className="text-dark text-decoration-none">Ayuda</Link>
                </div>
            </div>
            <div className="row p-3">
                <div className="col-md-4">
                    <Link to={"/"}><img src={logoford} alt={"Ford Argentina"} width={60} /></Link>
                </div>
                <div className="col-md-4 text-center">
                    <NavBar />
                </div>
                <div className="col-md-4 text-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default Header;