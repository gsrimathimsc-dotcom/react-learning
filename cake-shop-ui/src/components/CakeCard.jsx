function CakeCard(props) {
  return (
    <div className="card">
      <div className="emoji">{props.emoji}</div>
      <h3>{props.name}</h3>
      <p className="flavour">{props.flavour}</p>
      <p className="price">₹{props.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default CakeCard;
