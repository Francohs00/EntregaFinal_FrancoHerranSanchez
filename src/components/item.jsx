const Item = ({item}) => {
    return (
        <div class="card">
            <img src={item.imagen} class="card-img-top" alt="..." />
            <div class="card-body">
                <h3>{item.titulo}</h3>
                <p class="card-text">{item.descripcion} <br /><b>${item.precio}</b></p>
            </div>
        </div>
    )
}
export default Item;