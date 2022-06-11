import SizeChunk from "./SizeChunk"

const allSizes = [38, 39, 40, 41, 42, 43, 44, 45]

function SizeTable(props) {
  const { availableSizes, itemQuantity, handleSizePicker } = props

  const handleClick = (size) => {
    handleSizePicker(size)
  }

  const table = allSizes.map((size, index) => (
    <SizeChunk
      key={index}
      size={size}
      availableSizes={availableSizes}
      itemQuantity={itemQuantity}
      onClick={handleClick}
    />
  ))
  return <div className='sizeTable'>{table}</div>
}

export default SizeTable
