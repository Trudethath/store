function InfoPopup(props) {
  const { trigger, infoPopupText } = props
  return trigger ? (
    <div className='info-popup'>
      <div className='upper'>
        <h3>{infoPopupText.header}</h3>
      </div>
      <div className='lower'>
        <span>{infoPopupText.text}</span>
        <h5>{infoPopupText.secondaryText}</h5>
      </div>
    </div>
  ) : null
}

export default InfoPopup
