import React, { useState } from "react"
import SizeChunk from "./SizeChunk"

const allSizes = [38, 39, 40, 41, 42, 43, 44, 45]

function SizeTable(props) {
  const { availableSizes, itemQuantity, handleSizePicker } = props
  const [radioChecked, setRadioChecked] = useState(null)

  const handleChange = (e) => {
    const size = e.target.value
    if (e.target.className === "active") {
      setRadioChecked(parseInt(size))
      handleSizePicker(size)
    } else {
      handleSizePicker(-1)
    }
  }

  const table = allSizes.map((size, index) => (
    <SizeChunk
      key={index}
      size={size}
      availableSizes={availableSizes}
      itemQuantity={itemQuantity}
      radioChecked={radioChecked === size}
      onChange={handleChange}
    />
  ))

  return <div className='sizeTable'>{table}</div>
}

export default SizeTable
