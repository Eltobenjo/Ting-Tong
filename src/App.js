
import { Switch, Route, } from "react-router-dom";

import "./App.css";

import MainBody from "./Components/MainBody/MainBody";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import SignUp from "./Components/Header/SignUp";
import Login from'./Components/Header/Login'
import OurPromise from './Components/Header/OurPromise'
import Chef from './Components/Chef'

function App() {
 
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact> <MainBody /></Route>
        <Route path="/ChefSignUp" >Cook signup </Route>
        <Route path='/AboutUs'>About Us</Route>
        <Route path='/OurPromise'><OurPromise /></Route>
        <Route path='/Login'><Login /></Route>
        <Route path='/SignUp'><SignUp /></Route>
        <Route path='/CookSignUp'><Chef /></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
