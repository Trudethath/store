function CarouselItem(props) {
  return (
    <div>
      <div style={{ padding: 8 }}>
        <p>{props.item.model}</p>
        <img
          src={props.item.img}
          alt={props.item.model}
          style={{ width: "100%" }}
        />
      </div>
    </div>
  )
}

export default CarouselItem
