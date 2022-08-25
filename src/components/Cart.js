import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'
import Checkout from './Checkout'

function Cart() {

  const [checkout, setCheckout] = useState(false)

  const {cart, deleteItem, emptyCart, getItemPrice} = useContext(CartContext)

  if (cart.length > 0) {
    return(
      <div className='row col-xl-12'>
        <div className='col-xl-8'>
          {
            cart.map((element, index) => {
              return <div className='col-xl-8 d-flex aling-items-center justify-content-evenly my-5 backgroundColorCard rounded-end' key={index}>
                  <div>
                      <img className='rounded-circle py-3' src={element.image} alt={element.product} width={300}/>
                  </div>
                  <div className='align-self-center text-light'>
                    <h3>{element.product}</h3>
                    <h2>Precio: ${element.price}</h2>
                    <h3>Unidades: {element.qty}</h3>
                  </div>
                  <div className='align-self-center'>
                      <button onClick={() => deleteItem(element.id)} className='btn btn-danger'>Delete</button>
                  </div>
              </div>
            })
          }

          <div>
            <h2>Total: $ {getItemPrice()}</h2>
            <button onClick={() => emptyCart()} className='btn btn-warning'>Vaciar Carrito</button>
          </div>
        </div>
        
        <div className='col-xl-4'>
          {
            !checkout 
            ? <button onClick={() => setCheckout(true)} className='btn btn-success' >Ir al Checkout</button>
            : <Checkout/>
          }
        </div>
      </div>
    )
  }

  return (
    <div className='text-center'>
      <h2 className='fs-1 py-5'>Hola soy el carrito</h2>
      <Link to={'/'}><button className='btn btn-success mb-5'>Ir al Inicio</button></Link>
    </div>
  )
}

export default Cart