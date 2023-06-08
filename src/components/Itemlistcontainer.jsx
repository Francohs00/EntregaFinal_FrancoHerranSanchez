import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productos from "./json/productos.json";
import Itemlist from "./itemlist";

const Itemlistcontainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? productos.filter(item => item.categoria === id) : productos)
            }, 2000);
        });

        promesa.then(data => {
            setItems(data);
        })
    }, [])
    return(
        <div className="container my-5">
            <div className="row">
                        <Itemlist items={items} /> 
            </div>
        </div>

    )
}

export default Itemlistcontainer;