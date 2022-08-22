import { customFetch } from '../assets/customFetch';
import { useState, useEffect} from 'react';
import SyncLoader from "react-spinners/SyncLoader";
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList';
import { products } from "../assets/productos";

const ItemListContainer = (greeting) => {

  const [listProducts, setListProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const {id} = useParams()
    useEffect(()=>{
        setLoading(true)
        customFetch(products)
        .then(data => {
            if(id){
                setLoading(false)
                setListProducts(data.filter(item=>item.categoria===id))
            }else{
                setLoading(false)
                setListProducts(data)
            }
        })
    },[id])

  return (
    <>
      <h2 className="text-center mt-5">Bienvenido {greeting.nombre}</h2>
      {loading && <SyncLoader className="loading" color="#e4ae7e"/>}
      {!loading && <ItemList listProducts={listProducts}/>} 
    </>
  )
}

export default ItemListContainer