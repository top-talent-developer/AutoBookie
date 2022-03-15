import React from "react";
// Page
// import Gamedetails from "./components/GameDetail";
import Home from "./pages/Home";
import Sports from "./pages/Sports";
import Premium  from "./pages/Premium";
import LiveBetting from "./pages/LiveBetting"
// component
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/live-betting" element={<LiveBetting />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
