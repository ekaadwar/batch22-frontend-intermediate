import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";

import Navbar from "./components/sections/Navbar";
import Footer from "./components/sections/Footer";
import Logo from "./img/logo/coffee.png";

import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import ProductDetail from "./components/pages/ProductDetail";
import Cart from "./components/pages/Cart";
import History from "./components/pages/History";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Profile from "./components/pages/Profile";
import Chat from "./components/pages/Chat";

// import TestNav from "./testing/Navbar";

import { connect } from "react-redux";

class App extends React.Component {
  render() {
    const { onAuth } = this.props.auth;
    console.log(onAuth);
    return (
      <>
        <Router>
          {onAuth === false && <Navbar image={Logo} />}
          {/* <Navbar image={Logo} /> */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/product" component={Product} />
            <Route path="/products/:id" component={ProductDetail} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute path="/history">
              <History />
            </PrivateRoute>
            <PrivateRoute path="/profile">
              <Profile />
            </PrivateRoute>
            <PrivateRoute path="/cart">
              <Cart />
            </PrivateRoute>
            <PrivateRoute path="/chat">
              <Chat />
            </PrivateRoute>
            <Route path="/testing/navbar" />
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
