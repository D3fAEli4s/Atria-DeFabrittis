import ItemListContainer from "./ItemListContainer";
import { ItemDetailContainer } from "./ItemDetailContainer";
import Cart from "./Cart";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  
  return (
    <main id="rowProducts">
        <Routes> 
          <Route path="/" element={<ItemListContainer test={true} nombre="Alguien"/>}/>
          <Route path="/category/:id" element={<ItemListContainer/>}/>
          <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </main>
  )
}

export default Main 