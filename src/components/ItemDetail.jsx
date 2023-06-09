

const ItemDetail = ({ producto }) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 offset-md-3">
                    {producto.imagen && <img src={producto.imagen} alt={producto.titulo} className="img-fluid" />}
                </div>
                <div className="col-md-3">
                    <h1>{producto.titulo}</h1>
                    <h3>{producto.descripcion}</h3>
                    <p><b>${producto.precio}</b></p>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
