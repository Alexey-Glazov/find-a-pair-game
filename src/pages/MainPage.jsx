import { memo } from "react";
import "./MainPage.scss";

const MainPage = memo(() => {
  return (
    <>
      <header className='header'>
        <h1 className='header-title'>Найди пару</h1>
      </header>
      <main className='main-content'></main>
      <footer className='footer'>
        <p className='footer-text'>Alexey Glazov 2023 ©</p>
      </footer>
    </>
  );
});

export default MainPage;
