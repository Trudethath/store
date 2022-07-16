import WishlistItem from "./WishlistItem"

function WishlistTable(props) {
  const { wishlistArray } = props
  console.log(wishlistArray)

  const mapItems = wishlistArray.map((item) => {
    return <WishlistItem key={item.itemId} item={item} />
  })

  return <div className='items-wrapper'>{mapItems}</div>
}

export default WishlistTable
