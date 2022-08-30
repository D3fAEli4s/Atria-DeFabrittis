import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList';
import CircularProgress from '@mui/material/CircularProgress';
import { db } from '../firebase.js'
import { collection, getDocs, query, where} from 'firebase/firestore'

const ItemListContainer = (greeting) => {

  const [listProducts, setListProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const {id} = useParams()
  useEffect(()=>{
    if(!id){

    
    const productsCollection = collection(db, "ItemCollection")
    const consulta = getDocs(productsCollection)

    consulta.then(snapshot =>{
        const productos = (snapshot.docs.map(doc=>{
            const elemento = {
                ...doc.data(),
                id: doc.id
            }
            return elemento
        }));
        setListProducts(productos)
        setLoading(true)
    })
    .catch(err =>{
        console.log(err);
    })
}else{
    const productsCollection = collection(db, "ItemCollection")
    const filtro = query(productsCollection, where("categoria","==",id))
    const consulta = getDocs(filtro)

    consulta.then(snapshot =>{
        const productos = (snapshot.docs.map(doc=>{
            return{
                ...doc.data(),
                id: doc.id
            }
        }));
        setListProducts(productos)
        setLoading(true)
    })
    .catch(err =>{
        console.log(err);
    })
}
},[id])


  return (
    <>
      <h2 className="text-center mt-5">Bienvenido {greeting.nombre}</h2>
      {!loading && <CircularProgress className='loading' color="inherit"/>}
      {loading && <ItemList listProducts={listProducts}/>} 
    </>
  )
}

export default ItemListContainer