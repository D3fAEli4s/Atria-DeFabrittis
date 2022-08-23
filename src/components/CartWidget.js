import { useContext } from "react"
import { CartContext } from "./CartContext"


function CartWidget () {

    const {getItemQty} = useContext(CartContext)

    return (
        <button className="btn btn-sm fs-3 text-light" badgeContent = {getItemQty()}>
            <i className="bi bi-bag-plus"></i>
        </button>
    )
}

export default CartWidget