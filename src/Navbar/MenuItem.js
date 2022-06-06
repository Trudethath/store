function MenuItem(props) {
  return (
    <li>
      <a href={props.item.url}>{props.item.title}</a>
    </li>
  )
}

export default MenuItem
