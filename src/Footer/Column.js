function Column(props) {
  const { column } = props

  const subTitles = column.subTitles.map((subTitle, index) => {
    return <li key={index}>{subTitle}</li>
  })

  return (
    <div className='column'>
      <span className='footerTitle'>{column.title}</span>
      <ul>{subTitles}</ul>
    </div>
  )
}

export default Column
