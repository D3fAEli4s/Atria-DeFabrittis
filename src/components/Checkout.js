import React, { useState, useContext } from 'react'
import { CartContext } from './CartContext'
import { db } from '../firebase.js'
import{serverTimestamp, collection, addDoc} from 'firebase/firestore'
import swal from 'sweetalert';
import { Formulario, Input } from "./Formularios";

function Checkout() {

  const [setSubmit] = useState(false)
  const [costumer, setCostumer] = useState({

    name: '',
    lastname: '',
    phone: '',
    email: '',
    email2: '',
    address: '',

  })

  const {cart, getItemPrice} = useContext(CartContext)

  const handlerChangeInput = (e) => {
    setCostumer({
        ...costumer,
        [e.target.name]: e.target.value,
    })
  }

  let btn = document.querySelector("#btnFinalizar")

  const validacionDeEmails = () => {
    if (costumer.email !== costumer.email2) {
        console.log("los emails no son iguales")
        btn.disabled = true
    }
    else if (costumer.email && costumer.email2) {
        console.log("los emails son iguales")
        btn.disabled = false
    }
  }

  const handlerSubmit = (e) => {
    e.preventDefault()

    const order = {
        items: cart,
        buyer: {...costumer},
        price: getItemPrice(),
        date: serverTimestamp(),
    }

    const orderCollection = collection(db, " orders")
    const consulta = addDoc(orderCollection, order)

    setSubmit(true)
    consulta
        .then(res => {
            console.log(res.id)
        })
        .catch(err => {
            console.log(err)
        })

    console.log(order)
  }

  function submitOrder(e) {
    e.preventDefault();

    if (cart.length === 0) {
        swal({
            type: "error",
            title: "Oops...",
            text: "No hay productos, selecciona alguno!",
            icon: "error",
            timer: "2000",
            width: "50%",
            padding: "40px",
            showConfirmButton: false
        })
    } else {

        swal({
            title: "Compra Exitosa!",
            text: "Su compra ha sido finalizada, pronto le llegará el pedido.",
            icon: "success",
            timer: "2000",
            width: "50%",
            padding: "40px",
            showConfirmButton: false
        }).then(function () {
        window.location = "https://atria-nu.vercel.app/"
        })
    }
}

  return (
        <div className='col-xl-8'>
            <h2>Complete Tus datos</h2>
            <Formulario onSubmit={handlerSubmit}>
                <Input placeholder='Nombre'
                name='name'
                value={costumer.name}
                onChange={handlerChangeInput} 
                />
                <Input placeholder='Apellido'
                name='lastname'
                value={costumer.lastname}
                onChange={handlerChangeInput} 
                />
                <Input placeholder='Numero'
                name='phone'
                value={costumer.phone}
                onChange={handlerChangeInput} 
                />
                <Input placeholder='Correo Electrónico' 
                name='email'
                value={costumer.email}
                onChange={handlerChangeInput}
                />
                <Input placeholder='Confirmar Correo Electrónico' 
                name='email2'
                value={costumer.email2}
                onChange={handlerChangeInput}
                validacionDeEmails={validacionDeEmails()}
                />
                <Input placeholder='Domicilio'
                name='address'
                value={costumer.address}
                onChange={handlerChangeInput} 
                />
            <button onClick={submitOrder} type='submit'  id="btnFinalizar" className='btn btn-success'>Confirmar Compra!</button>
            </Formulario>
        </div>
  )
}

export default Checkout