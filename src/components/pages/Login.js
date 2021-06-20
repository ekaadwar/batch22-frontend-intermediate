import React from "react";
import { connect } from "react-redux";
import { toggleAuth } from "../../redux/action/auth";

class Login extends React.Component {
  componentDidMount() {
    this.props.toggleAuth();
  }
  render() {
    return (
      <section className="auth">
        <div className="container h-full mx-auto">
          <div className="flex justify-end">
            <div className="w-1/2 bg-white">
              <div className="p-16 space-y-7">
                <div className="flex justify-between mb-20">
                  <div className="flex items-center">
                    <span className="text-l font-bold ml-3">Coffee Shop</span>
                  </div>
                  <button className="bg-yellow-500 hover:bg-yellow-300 px-5 py-2 rounded-full font-bold">
                    Sign Up
                  </button>
                </div>
                <h3 className="text-yellow-800 text-2xl font-bold text-center">
                  Login
                </h3>
                <form className="space-y-7">
                  <div>
                    <h4 className="bold">Email Address :</h4>
                    <input
                      className="px-5 py-3 bg-white border-2 border-gray-300 rounded-xl w-full"
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <h4 className="bold">Password:</h4>
                    <input
                      className="px-5 py-3 bg-white border-2 border-gray-300 rounded-xl w-full"
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                    />
                  </div>

                  <a
                    className="inline-block text-yellow-800 font-bold"
                    href="forgot.html"
                  >
                    Forgot password?
                  </a>

                  <button
                    className="block bg-yellow-500 hover:bg-yellow-300 px-5 py-2 rounded-xl font-bold w-full"
                    type="submit"
                  >
                    Login
                  </button>

                  <div>
                    <button className="block bg-white hover:bg-gray-300 border-2 border-gray-300 px-5 py-2 rounded-xl font-bold w-full">
                      Login with google
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = { toggleAuth };

export default connect(null, mapDispatchToProps)(Login);
