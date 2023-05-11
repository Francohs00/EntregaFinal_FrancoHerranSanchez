import bag from "./images/bag-dash-fill.svg";
const Cartwidget = () => {
    return(
<button type="button" class="btn btn-ligth position-relative">
    <img src={bag} alt="carrito" width={20} />
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">  1
  </span>
</button>
    )
}
export default Cartwidget;