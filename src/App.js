import React from "react";
import "./App.css";

import Navbar from "./components/sections/Navbar";
import Logo from "./img/logo/coffee.png";
import Footer from "./components/sections/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import Cart from "./components/pages/Cart";
import History from "./components/pages/History";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";

import { connect } from "react-redux";

class App extends React.Component {
  render() {
    const { onAuth } = this.props.auth;
    return (
      <>
        <Router>
          {!onAuth && <Navbar image={Logo} />}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/product" component={Product} />
            <Route path="/cart" component={Cart} />
            <Route path="/history" component={History} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </Router>

        <Footer image={Logo} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(App);
