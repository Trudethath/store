function SizeTable(props) {
  const { sizeArray, handleChange } = props

  const options = sizeArray.map((size) => {
    return (
      <option key={size[0]} value={size[0]}>
        {size[0]}
      </option>
    )
  })
  return (
    <select id='sizeTable' onChange={handleChange}>
      <option value={0}></option>
      {options}
    </select>
  )
}

export default SizeTable
