import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Upload from "./pages/Upload";
import Update from "./pages/Update";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/men" component={Men} />
        <Route path="/women" component={Women} />
        <Route path="/kids" component={Kids} />
        <Route path="/cart" component={Cart} />
        <Route path="/upload" component={Upload} />
        <Route path="/update" component={Update} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
