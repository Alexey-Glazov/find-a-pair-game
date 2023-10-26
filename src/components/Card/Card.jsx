import "./Card.scss";
import { memo, useState } from "react";
import cn from "classnames";
const Card = memo(({ url, cardId }) => {
  const [CardOpen, setCardOpen] = useState(false);

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
      <div className={overlayClassNames} onClick={() => setCardOpen(!CardOpen)}>
        {cardId}
      </div>
    </div>
  );
});

export default Card;
