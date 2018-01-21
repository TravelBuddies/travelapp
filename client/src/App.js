import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Flights from "./pages/Flights";
import Cars from "./pages/Cars";
import Hotels from "./pages/Hotels";
import Packages from "./pages/Packages";
import NoMatch from "./pages/NoMatch";
import Contact from "./components/Contact";
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
        {/* <Route exact path="/" component={Users} /> */}
        {/* <Route exact path="/" component={Checkout} /> */}

        <Route component={NoMatch} />
      </Switch>
      <Contact />
      <Footer />
    </div>
  </Router>;

export default App;
