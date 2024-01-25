import React from "react";
import Header from './components/header';
import MainPage from './components/mainpage';
import Service from './components/services';
import Destination from './components/destination'
import TravelPoint from './components/point'
import KeyFeatures from './components/key'
import FeedBack from './components/feedback';
import Subscribe from './components/subscribe';
import Footer from './components/footer';
import './index.css'

function App() {
  return (
    <>
      <Header />
      <MainPage />
      <Service />
      <Destination />
      <TravelPoint />
      <KeyFeatures />
      <FeedBack />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
