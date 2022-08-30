import { useState, useEffect } from 'react';
import { ItemDetail } from "./ItemDetail";
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { db } from '../firebase.js'
import { collection, getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {

  const [listProduct, setListProduct] = useState({})
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  

  useEffect(()=>{
    const productsCollection = collection(db, "ItemCollection")
    const reference = doc(productsCollection,id)
    const consulta = getDoc(reference)

    consulta 
    .then((res)=>{
        const producto = res.data()
        producto.id = id
        setListProduct(producto)
        setLoading(true)
    })
    .catch((err)=>{
        console.log(err);
    })

},[id])

  return (
    <>
      {loading ? <ItemDetail listProduct={listProduct}/> : <CircularProgress className='loading' color="inherit"/>}
    </>
  )
}

export { ItemDetailContainer }