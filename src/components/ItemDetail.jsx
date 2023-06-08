

const ItemDetail = ({ productos }) => {
    if (!productos) 

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 offset-md-3">
                    {productos.imagen && <img src={productos.imagen} alt={productos.titulo} className="img-fluid" />}
                </div>
                <div className="col-md-3">
                    <h1>{productos.titulo}</h1>
                    <h3>{productos.descripcion}</h3>
                    <p><b>${productos.precio}</b></p>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
