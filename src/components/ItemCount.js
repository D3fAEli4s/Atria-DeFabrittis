import { useState } from "react";

const ItemCount = ({stock, initial}) => {

  const [contador, setContador] = useState(0)

  const aumentarContador = () => {
    if(contador<stock){
        setContador(contador + 1)
    }
}

const disminuirContador = () => {
    if(contador>initial){
        setContador(contador - 1)
    }
}

// const resetearContador = () => {
//     setContador(1)
// }

  return (
    <div contador={contador} className="cardContador">
      <p>Black XS Paco Rabanne</p>
      <div className="contenedorContador">
        <i className="bi bi-dash-lg fs-4 ms-3 text-primary" onClick={disminuirContador}></i>
        <label className="mx-5 fs-4">{contador}</label>
        <i className="bi bi-plus-lg fs-4 me-3 text-primary" onClick={aumentarContador}></i>
      </div>
        <button className="btn btn-primary mt-3 px-5">Agregar al Caritto</button>
    </div>
  )
}

export default ItemCount