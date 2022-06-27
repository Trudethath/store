import WishlistItem from "./WishlistItem"

function WishlistTable(props) {
  const { items, setAllSelectedItems, allSelectedItems, removeItemById } = props

  // determines which item is currently active
  const handleSelectedItems = (item) => {
    const filteredItems = allSelectedItems.find((elem) => {
      if (elem.id === item.id) {
        return true
      }
      return false
    })

    if (!filteredItems) {
      if (item.favorite === true)
        setAllSelectedItems([...allSelectedItems, item])
    } else {
      const copySelectedItems = [...allSelectedItems]
      const newArr = copySelectedItems.filter((elem) => elem.id !== item.id)
      setAllSelectedItems(newArr)
    }
  }

  // Displays items with favorite property only
  const filterItems = items.filter((item) => {
    return item.favorite === true
  })

  const mapItems = filterItems.map((item) => {
    return (
      <WishlistItem
        key={item.id}
        item={item}
        handleSelectedItems={handleSelectedItems}
        removeItemById={removeItemById}
      />
    )
  })

  return <div className='items-wrapper'>{mapItems}</div>
}

export default WishlistTable
