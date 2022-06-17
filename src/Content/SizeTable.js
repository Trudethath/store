import React, { useState, useContext } from "react"
import { AppContext } from "../AppProvider"
import SizeChunk from "./SizeChunk"

function SizeTable(props) {
  const { allSizes } = useContext(AppContext)
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
