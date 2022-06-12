function SizeChunk(props) {
  const { availableSizes, radioChecked, size, itemQuantity, onChange } = props

  const labelActive = (
    <>
      <input
        type='radio'
        name='size'
        onChange={onChange}
        id={size}
        value={size}
        defaultChecked={radioChecked}
        className={"active"}
      ></input>
      <label className='sizeChunk' htmlFor={size}>
        {size}
      </label>
    </>
  )

  const labelNotActive = (
    <>
      <input
        type='radio'
        name='size'
        id={size}
        value={size}
        onChange={onChange}
        className={"inactive"}
      ></input>
      <label htmlFor={size} className='sizeChunk deactivated'>
        {size}
      </label>
    </>
  )

  return availableSizes.includes(size) && itemQuantity > 0
    ? labelActive
    : labelNotActive
}

export default SizeChunk
