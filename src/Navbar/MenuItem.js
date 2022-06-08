import { Link } from "react-router-dom"
function MenuItem(props) {
  const { item } = props
  return (
    <li>
      <Link to={item.url}>{item.title}</Link>
    </li>
  )
}

export default MenuItem
