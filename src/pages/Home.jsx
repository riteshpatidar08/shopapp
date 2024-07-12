import React from 'react';
import TopStrip from '../components/TopStrip';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import GridSection from '../components/GridSection';
function Home() {
  return (
    <div>
      <TopStrip />
      <Navbar />
      <Hero />
      <GridSection/>
      <div className="px-28 py-7">
        <Banner />
      </div>
    </div>
  );
}

export default Home;
