import { Item } from "./Item";

const ItemList = ({listProducts}) => {

  console.log("holaa")

  return (
    <>
        {listProducts.map(product => <Item key={product.id} product={product} />)}
    </>
  )
}

export { ItemList }