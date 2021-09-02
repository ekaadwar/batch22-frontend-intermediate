import React from "react";
import { connect } from "react-redux";

import { clearAuth } from "../../redux/action/auth";

import Jumbotron from "../components/home/Jumbotron";
import Advantages from "../components/home/Advantages";
import Favorites from "../components/home/Favorites";
import Spots from "../components/home/Spots";
import Partners from "../components/home/Partners";
import Testimony from "../components/home/Testimony";

class Home extends React.Component {
  componentDidMount() {
    this.props.clearAuth();
  }

  render() {
    return (
      <>
        <Jumbotron />
        <Advantages />
        <Favorites />
        <Spots />
        <Partners />
        <Testimony />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = { clearAuth };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
