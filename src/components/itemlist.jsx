import Item from "./item"

const Itemlist = ({items}) => {

    return(
        <>
                {items.map(item=> <div key={item.idx} className="col-md-4">
                    <Item item={item}/>
                </div>)}
        </>
    )
}

export default Itemlist;