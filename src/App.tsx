import React from 'react';
import Header from './UI/Header/Header';
import Main from './features/Main/Main';
import AboutUs from './features/AboutUs/AboutUs';
import Menu from './features/Menu/Menu';
import Gallery from './features/Gallery/Gallery';
import Video from './features/Video/Video';
import Contacts from './features/Contacts/Contacts';
import Booking from './features/Booking/Booking';
import Footer from './UI/Footer/Footer';
import './styles/App.scss';

const App = () => {
  return (
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
        <Contacts />
        <Booking />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
