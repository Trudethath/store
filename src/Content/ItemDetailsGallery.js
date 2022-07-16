function ItemDetailsGallery(props) {
  const { children } = props
  const images = children.map((image, index) => {
    return (
      <img
        key={index}
        src={require("../images/" + image.props.src)}
        alt={image.props.alt}
      />
    )
  })
  return <div className='images-wrapper'>{images}</div>
}

export default ItemDetailsGallery
