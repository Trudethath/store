function SizeChunk(props) {
  const { availableSizes, size, itemQuantity, onClick } = props

  return (
    <div
      className={
        availableSizes.includes(size) && itemQuantity > 0
          ? "sizeChunk"
          : "sizeChunk deactivated"
      }
      onClick={() => onClick(size)}
    >
      {size}
    </div>
  )
}

export default SizeChunk
