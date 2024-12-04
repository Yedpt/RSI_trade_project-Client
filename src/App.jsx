import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OnboardingPage from "./pages/OnboardingPage";
import BankHome from "./pages/BankHome";
import TradeHome from "./pages/TradeHome";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route path="/home-trading" element={<TradeHome />} />
        <Route path="/bank-home" element={<BankHome />} />
      </Routes>
    </Router>
  );
};

export default App;
