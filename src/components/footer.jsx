
import facebook from "./images/facebook.svg";
import instagram from "./images/instagram.svg";
import youtube from "./images/youtube.svg";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="Footer">
            <div className="container-fluid text-light py-5">
                <div className="container">
                    <div className="row">
                    <div className="col-md-2">
                            <h6>Ayuda</h6>    
                        </div>
                        <div className="col-md-2">
                            <h6>Buscar Agencia</h6>    
                        </div>
                        <div className="col-md-4 text-end">

                            <Link to={"https://www.facebook.com/ford"} className="text-light me-1"><img src={facebook} alt={"Facebook"} width={32} /></Link>
                            <Link to={"https://www.youtube.com/@fordargentina"} className="text-light me-1"><img src={youtube} alt={"YouTube"} width={32} /></Link>
                            <Link to={"https://www.instagram.com/fordargentina/"} className="text-light me-1"><img src={instagram} alt={"Instagram"} width={32} /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;