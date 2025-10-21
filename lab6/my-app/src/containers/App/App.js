import React from 'react';
import './App.css';
import Header from '../Layout/Header/header';
import Hero from '../Layout/Hero/hero';
import TopCards from '../Layout/TopCards/top_card';
import Footer from '../Layout/Footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <TopCards />
      <Footer />
    </div>
  );
}

export default App;
