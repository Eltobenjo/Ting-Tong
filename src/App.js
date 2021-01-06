import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <Router>
      <Header />
    
      <Footer />
    </Router>
  );
}

export default App;
