import { useState, useEffect } from 'react';
import { ItemDetail } from "./ItemDetail";
import { customFetch } from '../assets/customFetch';
import { products } from '../assets/productos';

const ItemDetailContainer = () => {

  const [listProduct, setListProduct] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    customFetch(products)
        .then(res => {
          setLoading(false)
          setListProduct(res.find(item => item.id === 1))
        })
  }, [])

  return (
    <>
      {!loading ? <ItemDetail listProduct={listProduct}/> : <h5 className="text-center">Cargando...</h5> }
    </>
  )
}

export { ItemDetailContainer }