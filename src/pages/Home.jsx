import React from 'react';
import TopStrip from '../components/TopStrip';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import GridSection from '../components/GridSection';
import Features from '../components/Features';
import FitGuide from '../components/FitGuide';

import ProductList from '../components/ProductList';

function Home() {
  return (
    <div>
     
      <Hero />
      <GridSection />
      <div className="px-28 py-7">
        <Banner />
      </div>
<FitGuide/>
      <Features />
      <ProductList />
     
    </div>
  );
}

export default Home;
