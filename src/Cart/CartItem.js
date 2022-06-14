function CartItem(props) {
  const { item } = props

  return (
    <div className='cart-item'>
      <img src={item.img} alt={"image of " + item.model} />
      <div>
        <h3>{item.model}</h3>
        <h5>{item.gender === "male" ? "Men's" : "Women's"}</h5>
        <h5>color: {item.color}</h5>
        <h5>size: {item.size}</h5>
      </div>
      <div>delivery info</div>
    </div>
  )
}

export default CartItem
