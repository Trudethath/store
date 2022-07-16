function SizeTable(props) {
  const { quantity, handleChange } = props
  let sizeArray = []

  Object.keys(quantity).forEach((key) => {
    sizeArray.push(key.replace(/[^0-9]/g, ""))
  })

  const options = sizeArray.map((size) => {
    return (
      <option key={size} value={size}>
        {size}
      </option>
    )
  })
  return (
    <select id='sizeTable' onChange={handleChange}>
      <option value='0'></option>
      {options}
    </select>
  )
}

export default SizeTable
