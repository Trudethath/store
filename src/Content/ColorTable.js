function ColorTable() {
  let colorArray = ["black", "grey", "green", "yellow", "red"]

  const options = colorArray.map((color) => {
    return (
      <option key={color} value={color}>
        {color}
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

export default ColorTable
