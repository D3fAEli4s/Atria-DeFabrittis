import { useState, useEffect } from 'react';
import { ItemDetail } from "./ItemDetail";
import { customFetch } from '../assets/customFetch';
import { products } from '../assets/productos';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

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
      {!loading ? <ItemDetail listProduct={listProduct}/> : <CircularProgress className='loading' color="inherit"/>}
    </>
  )
}

export { ItemDetailContainer }