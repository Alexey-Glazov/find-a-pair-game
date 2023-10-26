import "./Card.scss";
import { memo, useState } from "react";
import cn from "classnames";
import { useEffect } from "react";
const Card = memo(({ url, cardId }) => {
  const [CardOpen, setCardOpen] = useState(true);
  useEffect(() => {
    console.log(CardOpen);
    const timer = setTimeout(() => {
      setCardOpen(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleCardClick = () => {
    setCardOpen(!CardOpen);
  };

  const overlayClassNames = cn("overlay", { clicked: CardOpen });
  return (
    <div
      className='image'
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundClip: "border-box",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={overlayClassNames} onClick={handleCardClick}>
        {cardId}
      </div>
    </div>
  );
});

export default Card;
