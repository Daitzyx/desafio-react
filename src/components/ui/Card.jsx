import "./Card.css";

function Card(props) {
  const cardClassName = `card ${props.className}`;
  
  return (
      <div className={cardClassName}>
          {props.children}
      </div>
  );
}

export default Card;

