import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

const App = () => {
  return (
    <React.Fragment>
      <div className="bg-slate-900">
        <Navbar></Navbar>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
