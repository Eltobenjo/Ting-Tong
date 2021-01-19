import { Switch, Route } from "react-router-dom";
import "./App.css";
//import TemporaryMenu from "./Components/TemporaryMenu";
//import TemporaryShoppingCart from "./Components/TemporaryShoppingCart";

import "../public/Images/BgImg/BgImg9.svg";

import MainBody from "./Components/MainBody/MainBody";
import UserSignUp from "./Components/MainBody/UserSignUp.js";
import ChefSignUp from "./Components/MainBody/ChefSignUp.js";
import ChefSuccess from "./Components/MainBody/ChefSuccess.js";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Search from "./Components/UserSearch/Search";
//import SignIn from './Components/Header/SignIn';
import ChefNextSteps from "./Components/ChefNextSteps/ChefNextSteps";
//import ChefCards from "./Components/ChefCards/ChefCards";
import PlaceOrder from "./Components/PlacingOrder/PlaceOrder";
import PlaceOrder2 from "./Components/PlacingOrder/PlaceOrder2";

import SignUp from "./Components/JoinOurTeam";
import Login from "./Components/Header/Login";
import OurPromise from "./Components/Header/OurPromise";
import Chef from "./Components/Chef";
import ChefGrid from "./Components/ChefGrid";
import JoinOurTeam from "./Components/JoinOurTeam";
import Success from "./Components/Success";
import ControlledOpenSelect from "./Components/ControlledOpenSelect";
import ChefNew from "./Components/ChefCard";
import Berlin from './Components/Berlin'
import Frankfurt from "./Components/Frankfurt";
import Munich from "./Components/Munich";


function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route path="/" exact>
          <MainBody />
        </Route>
        <Route path="/JoinOurTeam">
          <JoinOurTeam />
        </Route>
        <Route path="/AboutUs">About Us</Route>
        <Route path="/OurPromise">
          <OurPromise />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Order">
          <ControlledOpenSelect />
        </Route>
        <Route path="/ChefNew">
          <ChefNew />
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
        <Route path="/UserSignUp">
          <UserSignUp />
        </Route>
        <Route path="/ChefSignUp">
          <ChefSignUp />
        </Route>
        <Route path="/Chef">
          <Chef />
        </Route>
        <Route path="/ChefSuccess">
          <ChefSuccess />
        </Route>
        <Route path="/Success">
          <Success />
        </Route>
        <Route path="/Chefdata">
          <Chef />
        </Route>
        <Route path="/ChefNextSteps" exact>
          <ChefNextSteps />
        </Route>
        <Route path="/PlaceOrder" exact>
          <PlaceOrder />
        </Route>
        <Route path="/PlaceOrder2" exact>
          <PlaceOrder2 />
        </Route>
        <Route path="/UserSearch" exact>
          <Search />
        </Route>
        <Route path="/Berlin" exact>
          <Berlin />
        </Route>
        <Route path="/Frankfurt" exact>
         <Frankfurt />
        </Route>
        <Route path="/Munich" exact>
          <Munich />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
