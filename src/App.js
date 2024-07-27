
import React from 'react';
import Header from './components/header';
import HeroSection from './components/HeroSection';
import RetreatList from './components/RetreatList';

function App() {
  return (
   
      <main className="container mx-auto px-4">
      <Header />

        <HeroSection />
        <RetreatList />
      </main>
  
  );
}

export default App;
