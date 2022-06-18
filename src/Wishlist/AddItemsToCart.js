function AddItemsToCart(props) {
  const { selectedItems, sendItemsToCart } = props

  let finalItems = [...selectedItems]

  let totalPrice = 0
  finalItems.forEach((item) => {
    totalPrice += item.price * item.quantity
  })

  const handleClick = () => {
    sendItemsToCart(finalItems)
  }

  const render = (
    <div className='addToCart'>
      <h4>Selected items: {finalItems.length}</h4>
      <h3>Total: {totalPrice} $</h3>{" "}
      <button onClick={handleClick}>
        <h3>Add to cart</h3>
      </button>
    </div>
  )

  return render
}

export default AddItemsToCart
