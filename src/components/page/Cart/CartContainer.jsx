import { useContext } from "react"
import { ShopContext } from "../../../context/shopContext"
import Cart from "./Cart";



const CartContainer = () => {
    const {shop, deleteProductById, clearCart, totalBuy} = useContext(ShopContext);

    let total = totalBuy()


    return (
    <Cart
    shop= {shop}
    clearCart= {clearCart}
    deleteProductById= {deleteProductById}
    total={total}/>
    )
}

export default CartContainer