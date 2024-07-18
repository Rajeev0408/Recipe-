import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Recipe from './components/Recipe';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/recipe/:recipeId" element={<Recipe />} />
      </Routes>
    </Router>
  );
}

export default App;
