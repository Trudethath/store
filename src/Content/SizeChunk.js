function SizeChunk(props) {
  const { availableSizes, size, itemQuantity } = props
  console.log(itemQuantity)
  return (
    <div
      className={
        availableSizes.includes(size) && itemQuantity > 0
          ? "sizeChunk"
          : "sizeChunk deactivated"
      }
    >
      {size}
    </div>
  )
}

export default SizeChunk
