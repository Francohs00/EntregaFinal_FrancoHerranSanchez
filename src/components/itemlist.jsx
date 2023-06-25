import Item from "./item";

const ItemList = ({productos}) => {
    return (
        <>
            {productos.map(producto => <Item key={producto.id} producto={producto} />)}
        </>
    )
}

export default ItemList;