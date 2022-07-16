function ColorTable(props) {
  let colorArray = ["black", "grey", "green", "yellow", "red"]

  const options = colorArray.map((color) => {
    return (
      <option key={color} value={color}>
        {color}
      </option>
    )
  })

  return (
    <select id='sizes' disabled={props.isDisabled}>
      <option value=''></option>
      {options}
    </select>
  )
}

export default ColorTable
