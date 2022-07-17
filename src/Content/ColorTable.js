function ColorTable(props) {
  let colorArray = ["black", "grey", "green", "yellow", "red"]
  const { isDisabled, handleChange } = props
  const options = colorArray.map((color) => {
    return (
      <option key={color} value={color}>
        {color}
      </option>
    )
  })

  return (
    <select id='colorTable' disabled={isDisabled} onChange={handleChange}>
      <option value='none'></option>
      {options}
    </select>
  )
}

export default ColorTable
