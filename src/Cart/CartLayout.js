import CartItems from "./CartItems"

function CartLayout() {
  return (
    <div className='cart-wrapper'>
      <div>
        <h3>My cart</h3>
        <CartItems />
      </div>
    </div>
  )
}

export default CartLayout
