import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material'
import { useContext } from "react"
import { CartContext } from "./CartContext"


function CartWidget () {

    const {getItemQty} = useContext(CartContext)

    return (
        <>
            <Badge badgeContent={getItemQty()} className="colorCart me-2">
                <ShoppingCartIcon />
            </Badge>
        </>
    )
}

export default CartWidget