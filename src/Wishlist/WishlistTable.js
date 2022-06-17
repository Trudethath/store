import WishlistItem from "./WishlistItem"

function WishlistTable(props) {
  const { items, setAllSelectedItems, allSelectedItems } = props

  const handleSelectedItems = (item) => {
    const filteredItems = allSelectedItems.find((elem) => {
      if (elem.id === item.id) {
        return true
      }
      return false
    })

    if (!filteredItems) {
      setAllSelectedItems([...allSelectedItems, item])
    } else {
      const copySelectedItems = [...allSelectedItems]
      console.log(item.id)
      const newArr = copySelectedItems.filter((elem) => elem.id !== item.id)
      setAllSelectedItems(newArr)
    }
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
