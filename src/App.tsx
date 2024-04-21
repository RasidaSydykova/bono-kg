import React from 'react';
import Header from './UI/Header/Header';
import Main from './features/Main/Main';
import './styles/App.scss';
import AboutUs from './features/AboutUs/AboutUs';

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
        </section>
      </div>
    </>
  );
};

export default App;
