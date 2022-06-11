import ColorChunk from "./ColorChunk"

function ColorTable(props) {
  const { availableColors, itemQuantity, handleColorPicker } = props

  const handleClick = (color) => {
    handleColorPicker(color)
  }

  const table = availableColors.map((color, index) => (
    <ColorChunk
      key={index}
      color={color}
      availableColors={availableColors}
      itemQuantity={itemQuantity}
      onClick={handleClick}
    />
  ))
  return <div className='colorTable'>{table}</div>
}

export default ColorTable
