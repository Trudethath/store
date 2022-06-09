import { GoPrimitiveDot } from "react-icons/go"
import SizeTable from "./SizeTable"

function ItemDetails(props) {
  const { item } = props

  const details = (
    <div className='item-details'>
      <h5>{item.gender === "female" ? "Women's" : "Men's"}</h5>
      <h1>{item.model}</h1>
      <h3 className='priceTag'>{item.price} $</h3>
      {item.quantity <= 0 ? (
        <span>
          The Product is unavailable{" "}
          <span>
            <GoPrimitiveDot
              className='availabilityDot'
              style={{ color: "red" }}
            />
          </span>
        </span>
      ) : (
        <span>
          The Product is available{" "}
          <span>
            <GoPrimitiveDot
              className='availabilityDot'
              style={{ color: "green" }}
            />
          </span>
        </span>
      )}

      <SizeTable availableSizes={item.sizes} itemQuantity={item.quantity} />

      <button className='addToCart'>Add to cart</button>
    </div>
  )

  return details
}

export default ItemDetails
