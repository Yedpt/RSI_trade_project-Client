import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewsDetail from './components/NewsDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<YourHomeComponent />} />
        <Route path="/news/:id" element={<NewsDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
