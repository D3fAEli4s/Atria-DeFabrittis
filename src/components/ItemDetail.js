import { ItemCount } from "./ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import swal from 'sweetalert';

const ItemDetail = ({listProduct}) => {

  const [numero, setNumero] = useState(0)

  const{isInCart, addItem} = useContext(CartContext)

  const onAdd = (qty)=>{
    setNumero(numero)
    swal({
      title: "Se Agregaron los productos al carrito!",
      text: ":)",
      icon: "success",
      timer: "2000",
      width: "50%",
      padding: "40px",
      showConfirmButton: false
  })
    isInCart(listProduct.id)
    addItem(listProduct, qty)
}

  return (
    <>
      <div className="d-flex justify-content-center row">
          <div className="card my-5 shadow-lg border-0 col-xxl-3 col-xl-6 col-sm-8 col-xs-10">
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