import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import MainBody from './Components/MainBody/MainBody'

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";



function App() {
  return (


    <Router>
      <Header />
     <MainBody />
      <Footer />
    </Router>

  );
}

export default App;
