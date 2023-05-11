import logoford from "./images/logo-ford.webp";

const Header = () => {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <img src={logoford} alt={"logoford"} />
                </div>

            </div>
        </div>
 
    )
}

export default Header;