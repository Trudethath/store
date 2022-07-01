function InfoPopup(props) {
  const { trigger, infoPopupText } = props
  return trigger ? (
    <div className='info-popup'>
      <div className='upper'>
        <h3>{infoPopupText.header}</h3>
      </div>
      <div className='lower'>
        <p>{infoPopupText.text}</p>
        <h5>{infoPopupText.redirectionInfo}</h5>
      </div>
    </div>
  ) : null
}

export default InfoPopup
