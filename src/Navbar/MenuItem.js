import { Link } from "react-router-dom"
function MenuItem(props) {
  return (
    <li>
      <Link to={props.item.url}>{props.item.title}</Link>
    </li>
  )
}

export default MenuItem
