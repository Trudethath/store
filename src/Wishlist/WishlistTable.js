import WishlistItem from "./WishlistItem"

function WishlistTable(props) {
  const { items, sendSelectedItems } = props

  const selectedItems = []

  const handleSelectedItems = (item) => {
    if (!selectedItems.includes(item)) {
      selectedItems.push(item)
    } else {
      const index = selectedItems.map((obj) => obj.id).indexOf(item.id)
      selectedItems.splice(index, 1)
    }
    console.log(selectedItems)
  }

  const filterItems = items.filter((item) => {
    return item.favorite === true
  })

  const mapItems = filterItems.map((item) => {
    return (
      <WishlistItem
        key={item.id}
        item={item}
        handleSelectedItems={handleSelectedItems}
      />
    )
  })

  return <div className='items-wrapper'>{mapItems}</div>
}

export default WishlistTable
