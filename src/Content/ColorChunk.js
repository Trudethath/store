function ColorChunk(props) {
  const { availableColors, color, itemQuantity, onClick } = props
  return (
    <div
      className={
        availableColors.includes(color) && itemQuantity > 0
          ? "colorChunk"
          : "colorChunk deactivated"
      }
      onClick={() => onClick(color)}
    >
      {color}
    </div>
  )
}

export default ColorChunk
