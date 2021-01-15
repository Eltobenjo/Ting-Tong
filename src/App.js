
import { Switch, Route, } from "react-router-dom";
import "./App.css";


import MainBody from "./Components/MainBody/MainBody";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import UserSearch from "./Components/UserSearch/Search";
import SignIn from './Components/Header/SignIn';
import ChefNextSteps from './Components/ChefNextSteps/ChefNextSteps';
//import ChefCards from "./Components/ChefCards/ChefCards";


import SignUp from "./Components/JoinOurTeam";
import Login from'./Components/Header/Login'
import OurPromise from './Components/Header/OurPromise'
import Chef from './Components/Chef'
import ChefGrid from './Components/ChefGrid'
import JoinOurTeam from "./Components/JoinOurTeam";
import Success from './Components/Success' 

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
        <Route path="/SignUp">
          <SignUp />
        </Route>
        <Route path="/Chef">
          <Chef />
        </Route>
        <Route path="/Success">
          <Success />
        </Route>
        <Route path="/Chefdata">
          <ChefGrid />
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
