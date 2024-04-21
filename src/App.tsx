import React from 'react';
import Header from './UI/Header/Header';
import Main from './features/Main/Main';
import AboutUs from './features/AboutUs/AboutUs';
import Menu from './features/Menu/Menu';
import Gallery from './features/Gallery/Gallery';
import './styles/App.scss';
import Video from './features/Video/Video';

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
          <Gallery />
          <Video />
        </section>
      </div>
    </>
  );
};

export default App;
