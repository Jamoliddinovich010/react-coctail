import React from 'react';
import Home from "./pages/Home";
import Error from "./pages/Error";
import SingleCoctail from "./pages/SingleCoctail";
import About from "./pages/About";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
function App() {

  return (
    <Router>
      <Switch>
        <Route exact path = "/" > < Home > </Home></Route >
          <Route path = "/SingleCoctail/:id" > < SingleCoctail > </SingleCoctail> </Route >
           <Route path="/About"><About></About></Route>  
          <Route path="*" > < Error > </Error> </Route >
      </Switch>
    </Router>
  );
}

export default App;
