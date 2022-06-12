import ColorChunk from "./ColorChunk"

function ColorTable(props) {
  const { availableColors, itemQuantity, handleColorPicker } = props

  const handleChange = (e) => {
    const color = e.target.value
    handleColorPicker(color)
  }

  const table = availableColors.map((color, index) => (
    <ColorChunk
      key={index}
      color={color}
      availableColors={availableColors}
      itemQuantity={itemQuantity}
      onChange={handleChange}
    />
  ))
  return <div className='colorTable'>{table}</div>
}

export default ColorTable
