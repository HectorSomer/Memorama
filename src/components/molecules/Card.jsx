import "./Card.css";
import Image from '../atoms/Image';

function Card(props) {
  function handleClick() {
    if (!props.flippedCard && !props.matchedCard) {
      props.onClick(props.id);
    }
  }

  var cardContainerClasses = 'card-container';
  if (props.flippedCard) {
    cardContainerClasses += ' flipped';
  }
  if (props.matchedCard) {
    cardContainerClasses += ' matched';
  }

  var cardInnerClasses = 'card-inner';
  if (props.flippedCard) {
    cardInnerClasses += ' flipped';
  }

  return (
    <div className={cardContainerClasses} onClick={handleClick}>
      <div className={cardInnerClasses}>
        <div className="card-face">
          <Image src={props.frontImage} alt="Front" />
        </div>
        <div className="card-face rotate">
          <Image src={props.backImage} alt="Back" />
        </div>
      </div>
    </div>
  );
}

export default Card;