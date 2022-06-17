function AddItemsToCart(props) {
  const { selectedItems, sendItemsToCart } = props

  console.log(selectedItems)

  let finalItems = []
  // console.log(selectedItems)

  // filter for removed objects
  finalItems.forEach((element) => {
    if (element.favorite === false) {
      let index = finalItems.map((obj) => obj.id).indexOf(element.id)
      finalItems.splice(index, 1)
    }
  })

  let totalPrice = 0
  finalItems.forEach((item) => {
    totalPrice += item.price
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
