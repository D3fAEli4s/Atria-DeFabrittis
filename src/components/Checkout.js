import React, { useState, useContext } from 'react'
import { CartContext } from './CartContext'

function Checkout() {

  const [costumer, setCostumer] = useState({

    name: '',
    lastname: '',
    email: '',
    address: '',

  })

  const {cart, getItemPrice} = useContext(CartContext)

  const handlerChangeInput = (e) => {
    setCostumer({
        ...costumer,
        [e.target.name]: e.target.value,
    })
  }

  const handlerSubmit = (e) => {
    e.preventDefault()

    const order = {
        items: cart,
        buyer: {...costumer},
        price: getItemPrice(),
    }

    console.log(order)
  }

  return (
        <div className='col-xl-8'>
            <h2>Complete Tus datos</h2>
            <form onSubmit={handlerSubmit}>
                <input placeholder='Nombre'
                name='name'
                value={costumer.name}
                onChange={handlerChangeInput} 
                />
                <input placeholder='Apellido'
                name='lastname'
                value={costumer.lastname}
                onChange={handlerChangeInput} 
                />
                <input placeholder='Correo Electrónico' 
                name='email'
                value={costumer.email}
                onChange={handlerChangeInput}
                />
                <input placeholder='Domicilio'
                name='address'
                value={costumer.address}
                onChange={handlerChangeInput} 
                />

                <button type='submit' className='btn btn-success'>Confirmar Compra!</button>
            </form>
        </div>
  )
}

export default Checkout