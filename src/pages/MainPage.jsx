import { memo } from "react";
import "./MainPage.scss";
import GameField from "../components/GameField/GameField";
import { useState } from "react";

const MainPage = memo(() => {
  const [startPressed, setStartPressed] = useState(false);
  const [gameFieldConfig, setGameFieldConfig] = useState(null);
  console.log(startPressed);
  const handleStart = (gridSize) => {
    setStartPressed(true);
    setGameFieldConfig(gridSize);
  };

  return (
    <>
      <header className='header'>
        <h1 className='header-title'>Найди пару</h1>
      </header>
      <aside className='left-sidebar'>
        <button onClick={() => handleStart("small")} className='start'>
          Легко
        </button>
        <button onClick={() => handleStart("medium")} className='start'>
          Средне
        </button>
        <button onClick={() => handleStart("large")} className='start'>
          Сложно
        </button>
      </aside>
      <main className='main-content'>
        {startPressed && <GameField size={gameFieldConfig} />}
      </main>
      <aside className='right-sidebar'>очки:</aside>
      <footer className='footer'>
        <p className='footer-text'>Alexey Glazov 2023 ©</p>
      </footer>
    </>
  );
});

{
  /* <GameField size='medium' /> */
}

export default MainPage;
