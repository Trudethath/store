import { useLocation } from "react-router-dom"
import ItemDetailsGallery from "./ItemDetailsGallery"
import ItemDetails from "./ItemDetails"

function ItemDetailsLayout() {
  const location = useLocation()
  const { item } = location.state
  return (
    <div className='item-details-wrapper'>
      <ItemDetailsGallery>
        <img src={item.img} alt={item.model} />
        <img src={item.img} alt={item.model} />
        <img src={item.img} alt={item.model} />
      </ItemDetailsGallery>
      <ItemDetails item={item} />
    </div>
  )
}

export default ItemDetailsLayout
