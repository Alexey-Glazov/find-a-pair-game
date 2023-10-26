import { memo } from "react";
import "./GameField.scss";
import cardDataArray from "../../assets/cardDataArray.json";
import Card from "../card/card";
import cn from "classnames";

const GameField = memo(({ size }) => {
  const gameFieldClassNames = cn("game-field", `${size}`);
  const totalCards = {
    large: 64,
    medium: 36,
    small: 16,
  };

  const choosenId = [];
  const choosenCards = [];
  const iterCounts = totalCards[size] / 2;
  const getId = () => {
    return Math.floor(Math.random() * iterCounts);
  };
  while (choosenId.length < iterCounts) {
    const newId = getId();
    if (choosenId.indexOf(newId) === -1) {
      choosenId.push(newId);
    }
  }
  const reversedChoosenId = choosenId.reverse();
  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  const cardsId = shuffle([...choosenId, ...reversedChoosenId]);

  cardsId.forEach((cardId) => {
    choosenCards.push(cardDataArray[cardId]);
  });

  return (
    <div className={gameFieldClassNames}>
      {choosenCards?.map((card) => {
        return (
          <Card url={card.url} cardId={card.id} key={crypto.randomUUID()} />
        );
      })}
    </div>
  );
});

export default GameField;
