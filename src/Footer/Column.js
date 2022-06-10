function Column(props) {
  const { column } = props

  const subTitles = column.subTitles.map((subTitle) => {
    return <li>{subTitle}</li>
  })

  return (
    <div className='column'>
      <span className='footerTitle'>{column.title}</span>
      <ul>{subTitles}</ul>
    </div>
  )
}

export default Column
