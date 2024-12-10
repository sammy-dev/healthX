import React from 'react';
import { useState } from "react";
import { ArrowRight, Shield, Globe, Coins, ChevronDown, Github, Twitter } from 'lucide-react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';
import Buy from "./components/BuyNow";
import WalletPopup from "./components/WalletPopup";
import PurchaseHXTTokenPopup from "./components/PurchaseHXT";

function App() {
  const [greeting, setGreeting] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showPurchasePopUp, setshowPurchasePopUp] = useState(false);

  const handleConnectWallet = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handlePurchasePopup = () => {
    setshowPurchasePopUp(true);
  };

  const closePurchasePopup = () => {
    setshowPurchasePopUp(false);
  };

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then((registration) => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, (error) => {
        console.log('ServiceWorker registration failed: ', error);
      });
    });
  }

  return (
    <Router>
      <main className="bg-[#041c32] pb-12 md:pb-0">
        <Navbar />
        {showPopup && (
          <WalletPopup
            onClose={handleClosePopup}
            handlePurchasePopup={handlePurchasePopup}
          />
        )}
        {showPurchasePopUp && (
          <PurchaseHXTTokenPopup onClose={closePurchasePopup} />
        )}
        <div className="">
          <Routes>
            <Route
              path="/"
              element={
                <div className="mx-auto my-0 max-w-[1140px]">
                  <Navbar />
                  <Hero handleConnectWallet={handleConnectWallet} />
                  <Features />
                  <Tokenomics />
                  {<Roadmap /> }
                  <Buy handleConnectWallet={handleConnectWallet} />
                </div>
              }
            />
          </Routes>
        </div>
        <Footer />
      </main>
    </Router>
  );
 /* <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
  <Navbar />
  <Hero />
  <Features />
  <Tokenomics />
  <Footer />
</div>
);*/
}

export default App;