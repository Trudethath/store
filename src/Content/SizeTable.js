import SizeChunk from "./SizeChunk"

const allSizes = [38, 39, 40, 41, 42, 43, 44, 45]

function SizeTable(props) {
  console.log(props)
  const { availableSizes, itemQuantity } = props

  const table = allSizes.map((size, index) => (
    <SizeChunk
      key={index}
      size={size}
      availableSizes={availableSizes}
      itemQuantity={itemQuantity}
    />
  ))
  return <div className='sizeTable'>{table}</div>
}

export default SizeTable
