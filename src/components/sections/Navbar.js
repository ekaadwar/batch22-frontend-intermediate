import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../../assets/ekaCoffee.png";
import gajeel from "../../assets/gajeel.jpg";

// import { FaBeer } from "react-icons/fa";
import { HiViewList } from "react-icons/hi";

const Navbar = ({ auth }) => {
  function myFunction() {
    const x = document.getElementById("toggleMenu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  return (
    <nav className="z-40 h-20 py-4 fixed bg-white w-full shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div>
            <Link className="flex flex-row items-center" to="/">
              <img className="mr-5" src={logo} alt="Eka Coffee" />
              <h3 className="hidden lg:inline-block text-xl font-bold text-yellow-900 hover:text-yellow-700 ">
                Eka Coffee
              </h3>
            </Link>
          </div>
          <button
            onClick={() => myFunction()}
            className="flex lg:hidden justify-center items-center w-10 h-10 bg-yellow-900 hover:bg-yellow-800 rounded-md"
          >
            <HiViewList size={30} color="#fff" />
          </button>
          <div className="hidden lg:flex items-center space-x-16 ">
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/cart">Your Cart</Link>
            <Link to="/history">History</Link>
          </div>
          <div className="hidden lg:flex items-center space-x-16">
            {auth.token !== null ? (
              <Link to="/profile">
                <div className="h-8 w-8 bg-yellow-500 rounded-full overflow-hidden">
                  <img src={gajeel} alt="My Profile" />
                </div>
              </Link>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/signup">
                  <button className="bg-yellow-500 hover:bg-yellow-300 px-5 py-2 rounded-full font-bold">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
        <div id="toggleMenu" className="hidden">
          <div className="flex flex-col my-5 space-y-5 items-end pr-3">
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/cart">Your Cart</Link>
            <Link to="/history">History</Link>
            {auth.token !== null ? (
              <Link to="/profile">My Profile</Link>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/signup">
                  <button className="bg-yellow-500 hover:bg-yellow-300 px-5 py-2 rounded-full font-bold">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Navbar);
