import React from 'react';
import Header from './UI/Header/Header';
import Main from './features/Main/Main';
import './styles/App.scss';

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
      </div>
    </>
  );
};

export default App;
