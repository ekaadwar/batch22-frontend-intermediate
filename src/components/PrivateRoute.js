import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// class PrivateRoute extends React.Component {
//   render() {
//     const { token } = this.props.auth;
//     return (
//       <Route
//         render={(props) => {
//           if (token !== null) {
//             return this.props.childer;
//           } else {
//             return <Redirect to="/login" />;
//           }
//         }}
//       />
//     );
//   }
// }

const PrivateRoute = ({ children, auth, ...rest }) => {
  const { token } = auth;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (token !== null) {
          return children;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
