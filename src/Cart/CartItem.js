import React, { useState } from "react"

function CartItem(props) {
  const { item } = props
  console.log(item)
  const [quantityValue, setQuantityValue] = useState(item.selectedQuantity)

  // console.log(item)

  const handleChange = (e) => {
    // console.log(item.quantity, item.selectedQuantity)
  }

  return (
    <div className='cart-item'>
      <img src={item.img} alt={"image of " + item.model} />
      <div>
        <h3>{item.model}</h3>
        <h5>{item.gender === "male" ? "Men's" : "Women's"}</h5>
        <h5>color: {item.color}</h5>
        <h5>size: {item.size}</h5>
        <input type='number' value={item.quantity} onChange={handleChange} />
      </div>
      <div>delivery info</div>
    </div>
  )
}

export default CartItem
