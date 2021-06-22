import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = ({ auth }) => {
  return (
    <nav className="py-4 fixed bg-white w-full shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="flex items-center flex-row">
            <Link to="/">Eka Coffee</Link>
          </div>
          <div className="flex items-center space-x-16 ">
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/cart">Your Cart</Link>
            <Link to="/history">History</Link>
          </div>
          <div className="flex items-center space-x-16">
            {auth.token !== null ? (
              <div className="h-7 w-7 bg-yellow-500 rounded-full" />
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
