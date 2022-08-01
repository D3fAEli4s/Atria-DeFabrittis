import ItemCount from "./ItemCount"

const ItemListContainer = (greeting) => {

   

  return (
    <div className="cardProductos"> 
      <h2>Bienvenido {greeting.nombre}</h2>
      <ItemCount stock="7" initial="1"/>
    </div>
  )
}

export default ItemListContainer