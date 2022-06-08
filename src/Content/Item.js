import { BsHeart } from "react-icons/bs"
import { useNavigate } from "react-router-dom"

function Item(props) {
  const { item } = props
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/itemDetails", { state: { item: item } })
  }

  return (
    <div className='item' onClick={handleClick}>
      {item.onSale ? <span className='sale'>SALE</span> : null}
      <BsHeart className='favorite-icon' />
      <img src={item.img} alt={item.model} />
      <div className='item-desc'>
        <h4>{item.model}</h4>
        <span className='price'>{item.price} $</span>
      </div>
      <h5>size 38+</h5>
    </div>
  )
}

export default Item
