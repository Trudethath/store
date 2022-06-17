import WishlistItem from "./WishlistItem"

function WishlistTable(props) {
  const { items, sendSelectedItems } = props

  const selectedItems = []

  const handleSelectedItems = (item) => {
    const filteredItems = selectedItems.find((elem) => {
      if (elem.id === item.id) {
        return true
      }
      return false
    })

    if (!filteredItems) {
      selectedItems.push(item)
    } else {
      const index = selectedItems.findIndex((elem) => elem.id === item.id)
      selectedItems.splice(index, 1)
    }
    sendSelectedItems(selectedItems)
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
