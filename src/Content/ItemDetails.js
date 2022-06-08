import { useLocation } from "react-router-dom"

function ItemDetails() {
  const location = useLocation()
  const { item } = location.state
  return (
    <div className='item-details-wrapper'>
      <div className='images-wrapper'>
        <img src={item.img} alt={item.model} />
      </div>
      <div>
        <h1>{item.model}</h1>
        <h3>{item.price} $</h3>
        {item.quantity <= 0 ? (
          <span>Produkt niedostępny</span>
        ) : (
          <span>Produkt dostępny</span>
        )}

        <button>Dodaj do koszyka</button>
      </div>
    </div>
  )
}

export default ItemDetails
