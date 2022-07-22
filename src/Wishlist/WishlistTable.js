import WishlistItem from "./WishlistItem"

function WishlistTable(props) {
  const { wishlistArray } = props

  const mapItems = wishlistArray.map((item) => {
    return <WishlistItem key={item.itemId} item={item} />
  })

  return (
    <div className='items-wrapper'>
      {mapItems.length !== 0 ? mapItems : "No items in wishlist"}
    </div>
  )
}

export default WishlistTable
