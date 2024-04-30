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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/App.scss';

const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <section>
        <ToastContainer />
        <Main />
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
    </>
  );
};

export default App;
