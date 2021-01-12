import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./App.css";

import MainBody from "./Components/MainBody/MainBody";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import SignUp from "./Components/Header/SignUp";
import Login from'./Components/Header/Login'
//import ChefCards from "./Components/ChefCards/ChefCards";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact> <MainBody /></Route>
        <Route path="/ChefSignUp" >Cook signup </Route>
        <Route path='/AboutUs'>About Us</Route>
        <Route path='/OurPromise'>Our Promise</Route>
        <Route path='/Login'><Login /></Route>
        <Route path='/SignUp'><SignUp /></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
