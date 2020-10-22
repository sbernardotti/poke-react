import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Details from "./views/Details";
import Main from "./views/Main";
import Navbar from "./components/Navbar";

const App = () => (
  <section>
    <Navbar />
    <section className="container px-4 py-4">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/page/:page?">
            <Main />
          </Route>
          <Route path="/details/:name">
            <Details />
          </Route>
        </Switch>
      </BrowserRouter>
    </section>
  </section>
);

export default App;
