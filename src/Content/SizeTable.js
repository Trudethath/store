function SizeTable(props) {
  const { quantity } = props
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
    <select id='sizes'>
      <option value=''></option>
      {options}
    </select>
  )
}

export default SizeTable
