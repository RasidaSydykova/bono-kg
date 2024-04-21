import React from 'react';
import Header from './UI/Header/Header';
import Main from './features/Main/Main';
import './styles/App.scss';
import AboutUs from './features/AboutUs/AboutUs';
import Menu from './features/Menu/Menu';

const App = () => {
  return (
    <>
      <div className="content">
        <header>
          <Header />
        </header>
        <main className="main">
          <Main />
        </main>
        <section>
          <AboutUs />
          <Menu />
        </section>
      </div>
    </>
  );
};

export default App;
