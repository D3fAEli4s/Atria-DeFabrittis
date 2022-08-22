import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, initial, onAdd}) => {

  const agregarCarrito = ()=>{
    onAdd(contador)
}

  const [contador, setContador] = useState(initial);

  const aumentarContador = () => contador<stock && setContador(contador + 1);

  const disminuirContador = () => contador>initial && setContador(contador - 1);

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(true)
  }

  return (
    <div contador={contador}>
      <div>
        <i className="bi bi-dash-lg fs-4 ms-3 text-primary" onClick={disminuirContador}></i>
        <text className="px-5 fs-4 contador">{contador}</text>
        <i className="bi bi-plus-lg fs-4 me-3 text-primary" onClick={aumentarContador}></i>
      </div>
      {!click ? <button className="btn btn-primary mt-3 px-5" onClick={handleClick}>Agregar al Carrito</button> : <Link to="/cart" className="btn btn-primary mt-3 px-5" onClick={agregarCarrito}>Finalizar compra</Link>}
    </div>
  )
  
}

export { ItemCount }