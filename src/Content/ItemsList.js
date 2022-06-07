import { useContext } from "react"
import { AppContext } from "../AppProvider"
import { useLocation } from "react-router-dom"
import Item from "./Item"

function ItemsList() {
  const { items } = useContext(AppContext)
  const location = useLocation()
  const currentYear = new Date().getFullYear()

  let title = ""

  const filterItems = (path) => {
    switch (path) {
      case "/new":
        title = "New"
        const newItems = items.filter(
          (item) => item.release_year === currentYear
        )
        return newItems

      case "/sale":
        title = "On sale"
        const itemsOnSale = items.filter((item) => item.onSale === true)
        return itemsOnSale

      case "/men":
        title = "For men"
        const menItems = items.filter((item) => item.gender === "male")
        return menItems

      case "/women":
        title = "For women"
        const womenItems = items.filter((item) => item.gender === "female")
        return womenItems

      case "/all":
        title = "All"
        return items

      default:
        return null
    }
  }

  const itemsToShow = filterItems(location.pathname)

  const itemsToRender = itemsToShow.map((item) => (
    <Item key={item.id} item={item} />
  ))

  return (
    <>
      <div className='items-title'>
        <h2>{title}</h2>
      </div>
      <div className='items-list'>{itemsToRender}</div>
    </>
  )
}

export default ItemsList
