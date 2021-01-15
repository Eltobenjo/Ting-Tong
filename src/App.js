import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./App.css";

import MainBody from "./Components/MainBody/MainBody";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import UserSearch from "./Components/UserSearch/Search";
import SignIn from './Components/Header/SignIn';
import ChefNextSteps from './Components/ChefNextSteps/ChefNextSteps';
//import ChefCards from "./Components/ChefCards/ChefCards";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <MainBody />
        </Route>
        <Route path="/UserSearch" exact>
          <UserSearch />
        </Route>
        <Route path="/ChefNextSteps" exact>
          <ChefNextSteps />
        </Route>
<Route path='/SignUp'>
<SignIn />
</Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
