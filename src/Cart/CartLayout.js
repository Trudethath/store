import CartItems from "./CartItems"
import Buy from "./Buy"
import { useContext } from "react"
import { AppContext } from "../AppProvider"

function CartLayout() {
  const { cartItems } = useContext(AppContext)

  return (
    <div className='cart-wrapper'>
      <div>
        <h2>My cart</h2>
        <div className='cart-items-wrapper'>
          <CartItems cartItems={cartItems} />
        </div>
      </div>
      <Buy cartItems={cartItems} />
    </div>
  )
}

export default CartLayout
