import CartItems from "./CartItems"
import Buy from "./Buy"

function CartLayout() {
  return (
    <div className='cart-wrapper'>
      <div>
        <h3>My cart</h3>
        <div className='cart-items-wrapper'>
          <CartItems />
        </div>
        <Buy />
      </div>
    </div>
  )
}

export default CartLayout
