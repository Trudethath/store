function ColorChunk(props) {
  const { availableColors, radioChecked, color, itemQuantity, onChange } = props

  const labelActive = (
    <>
      <input
        type='radio'
        name='color'
        onChange={onChange}
        id={color}
        value={color}
        defaultChecked={radioChecked}
        className={"active"}
      ></input>
      <label className='colorChunk' htmlFor={color}>
        {color}
      </label>
    </>
  )

  const labelNotActive = (
    <>
      <input
        type='radio'
        name='color'
        id={color}
        value={color}
        onChange={onChange}
        className={"inactive"}
      ></input>
      <label htmlFor={color} className='colorChunk deactivated'>
        {color}
      </label>
    </>
  )

  return availableColors.includes(color) && itemQuantity > 0
    ? labelActive
    : labelNotActive
}

export default ColorChunk
