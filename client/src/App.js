import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from './pages/Auth'
import PrivateRoute from './utils/PrivateRoute'

import Home from "./pages/Home";
import About from "./pages/About";
import FAQs from "./pages/FAQs";
import Cards from "./pages/Cards";
import Flights from "./pages/Flights";
import Cars from "./pages/Cars";
import Hotels from "./pages/Hotels";
import Packages from "./pages/Packages";
import NoMatch from "./pages/NoMatch";
import Contact from "./components/Contact";
import User from "./pages/User";
import TripHistory from "./pages/TripHistory"
import NewUser from "./pages/Signup"
// import Checkout from "./pages/Checkout";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        

        <Route exact path="/" component={Home} />
        <Route exact path="/flights" component={Flights} />
        <Route exact path="/cars" component={Cars} />
        <Route exact path="/hotels" component={Hotels} />
        <Route exact path="/packages" component={Packages} />
        <Route exact path="/user" component={User} />
        <Route exact path="/user/travelhistory" component={TripHistory} />
        <Route exact path="/login" component={Auth} />
        <Route exact path="/About" component={About} />
        <Route exact path='/signup' component={NewUser} />
        <Route exact path="/Cards" component={Cards} />
        <Route exact path="/FAQs" component={FAQs} />

        {/* <PrivateRoute exact path='/user' component={User} /> */}
        {/* <PrivateRoute exact path='/checkout' component={Checkout} /> */}
        {/* <Route exact path="/" component={Users} /> */}
        {/* <Route exact path="/" component={Checkout} /> */}
        
        
        {/* <Route exact path="/" component={Books} /> */}
        {/* <Route exact path="/books" component={Books} /> */}
        {/* <Route exact path="/books/:id" component={Detail} /> */}

        <Route component={NoMatch} />
      </Switch>
      <Contact />
      <Footer/>
    </div>
  </Router>;

export default App;
