import { customFetch } from '../assets/customFetch';
import { useState, useEffect } from 'react';
import { products } from '../assets/productos';
import { ItemList } from './ItemList';

const ItemListContainer = (greeting) => {

  const [listProducts, setListProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    customFetch(products)
        .then(data => {
          setLoading(true)
          setListProducts(data)
        })
  }, [])

  return (
    <>
      <h2 className="text-center mt-5">Bienvenido {greeting.nombre}</h2>
      {!loading && <h5 className="text-center">Cargando...</h5>}
      {loading && <ItemList listProducts={listProducts}/>} 
    </>
  )
}

export default ItemListContainer