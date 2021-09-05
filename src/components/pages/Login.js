import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toggleAuth, authLogin, clearAuthMsg } from "../../redux/action/auth";
import { FcGoogle } from "react-icons/fc";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  onLogin = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.authLogin(email, password);
  };

  componentDidMount() {
    this.props.toggleAuth();
  }

  toHome = () => {
    this.props.toggleAuth();
  };

  componentDidUpdate() {
    const { token } = this.props.auth;
    if (token !== null) {
      this.props.toggleAuth();
      this.props.history.push("/");
    }
  }

  render() {
    const { errMsg } = this.props.auth;
    return (
      <section className="auth">
        <div className="container h-full mx-auto">
          <div className="grid md:grid-cols-2">
            <div className="md:col-start-2 flex flex-row justify-center">
              <div className="py-16 px-5 lg:px-16 space-y-7 w-full max-w-md">
                <div className="flex justify-between mb-20">
                  <div className="flex items-center">
                    <Link
                      onClick={this.toHome}
                      to="/"
                      className="text-l font-bold ml-2"
                    >
                      Eka Coffee
                    </Link>
                  </div>
                  <button className="bg-yellow-500 hover:bg-yellow-300 px-5 py-2 rounded-full font-bold">
                    Sign Up {}
                  </button>
                </div>
                <h3 className="text-yellow-800 text-2xl font-bold text-center">
                  Login
                </h3>
                {errMsg !== "" && (
                  <div className="flex flex-row w-full justify-between bg-red-300 text-red-700 font-bold p-2 rounded-md ">
                    {errMsg}
                    <button onClick={this.props.clearAuthMsg}>x</button>
                  </div>
                )}
                <form onSubmit={this.onLogin} className="space-y-7">
                  <div>
                    <label className="bold">Email Address :</label>
                    <input
                      onChange={(e) => this.setState({ email: e.target.value })}
                      className="px-5 py-3 bg-white border-2 border-gray-300 rounded-xl w-full"
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label className="bold">Password:</label>
                    <input
                      onChange={(e) =>
                        this.setState({ password: e.target.value })
                      }
                      className="px-5 py-3 bg-white border-2 border-gray-300 rounded-xl w-full"
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                    />
                  </div>

                  <span className="inline-block text-yellow-800 font-bold">
                    Forgot password?
                  </span>

                  <button
                    className="block bg-yellow-500 hover:bg-yellow-300 px-5 py-2 rounded-xl font-bold w-full"
                    type="submit"
                  >
                    Login
                  </button>

                  <div>
                    <button className="flex justify-center items-center space-x-2 bg-white hover:bg-gray-300 border-2 border-gray-300 px-5 py-2 rounded-xl font-bold w-full">
                      <FcGoogle size={25} />
                      <span>Login with google</span>
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
const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = { toggleAuth, authLogin, clearAuthMsg };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
