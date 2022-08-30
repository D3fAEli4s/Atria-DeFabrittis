import { ItemCount } from "./ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

const ItemDetail = ({listProduct}) => {

  const [numero, setNumero] = useState(0)

  const{isInCart, addItem} = useContext(CartContext)

  const onAdd = (qty)=>{
    setNumero(numero)
    alert(`agrego ${qty} productos`)
    isInCart(listProduct.id)
    addItem(listProduct, qty)
}

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="card w-25 my-5">
          <img src={listProduct.image} alt="asd" className="card-img-top"/>
          <div className="card-body text-center">
            <h5>{listProduct.product}</h5>
            <p>{listProduct.description}</p>
            <p>${listProduct.price}</p>
            <p>Stock: {listProduct.stock}</p>
            <ItemCount initial={1} stock={listProduct.stock} onAdd={onAdd}/>
          </div>
        </div>
      </div>
    </>
  )
}

export  { ItemDetail }