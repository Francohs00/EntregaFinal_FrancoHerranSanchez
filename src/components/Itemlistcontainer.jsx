import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import productos from "./json/productos.json";
import Itemlist from "./itemlist";
import { getFirestore, collection, getDocs, where, query} from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    // Acceder a una colección de documentos desde firestore
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "Vehiculos");
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(q).then(resultado => {
            if (resultado.size > 0) {
                setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
                setLoading(false);
            } else {
                console.error("Error! No se encontro el vehiculo!");
            }
        });
    }, [id]);
    /*useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "Vehiculos");

        productos.forEach(producto => {
            addDoc(itemsCollection,producto);
        });

        console.log("Productos cargados en firestore")
    }, []);*/

    return (
        <div className="container my-5">
            <div className="row">
                {loading ? <Loading /> : <Itemlist productos={items} />}
            </div>
        </div>
    )
}

export default ItemListContainer;