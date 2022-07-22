import { Link } from "react-router-dom"
function MenuItem(props) {
  const { item, activeElement, handleActiveNavTab } = props
  return (
    <li>
      <span
        className={activeElement === item.title ? "navbarActiveTab" : undefined}
        onClick={() => handleActiveNavTab(item.title)}
      >
        <Link to={item.url}>{item.title}</Link>
      </span>
    </li>
  )
}

export default MenuItem
