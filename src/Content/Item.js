import { BsHeart } from "react-icons/bs"

function Item(props) {
  return (
    <div className='item'>
      {props.item.onSale ? <span className='sale'>SALE</span> : null}
      <BsHeart className='favorite-icon' />
      <img src={props.item.img} alt={props.item.model} />
      <div className='item-desc'>
        <h4>{props.item.model}</h4>
        <span className='price'>{props.item.price} $</span>
      </div>
      <h5>size 38+</h5>
    </div>
  )
}

export default Item
