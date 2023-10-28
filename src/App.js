import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PayPalPay from './component/PayPalPay'
import Home from './component/Home';
import Tech from './component/Tech';
import Footer from './component/Footer';
import Buynow from './component/Buynow';
import Countdown from './component/Count';

export default function App() {
  
  
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/payment" element={<PayPalPay/>}/>
          <Route path= "/tech&features" element={<Tech/>}/>
          <Route path="/iphone-checkout" element={<Buynow/>}/>
          <Route path="/counting" element={<Countdown/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}
