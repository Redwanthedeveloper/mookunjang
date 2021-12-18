import React from 'react';
import About from '../components/About';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Rarity from '../components/Rarity';
import RarityItems from '../components/RarityItems';
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';
const HomeScreen = () => {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Rarity />
      <RarityItems />
      <Roadmap />
      <Team />
      <Footer />
    </>
  );
};

export default HomeScreen;
