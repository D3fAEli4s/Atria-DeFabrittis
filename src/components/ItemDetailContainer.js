import { useState, useEffect } from 'react';
import { ItemDetail } from "./ItemDetail";
import SyncLoader from "react-spinners/SyncLoader";
import { customFetch } from '../assets/customFetch';
import { products } from '../assets/productos';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  const [listProduct, setListProduct] = useState({})
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  

  useEffect(() => {
    setLoading(true)
    customFetch(products)
        .then(res => {
          setLoading(false)
          setListProduct(res.find(item => item.id == id ))
        })
  }, [id])

  return (
    <>
      {!loading ? <ItemDetail listProduct={listProduct}/> : <SyncLoader className="loading" color="#e4ae7e"/> }
    </>
  )
}

export { ItemDetailContainer }