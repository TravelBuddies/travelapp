import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/" component={Flights} />
        <Route exact path="/" component={Cars} />
        <Route exact path="/" component={Hotels} />
        <Route exact path="/" component={Users} />
        <Route exact path="/" component={Checkout} />
         */}
        
        <Route exact path="/" component={Books} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </Router>;

export default App;
