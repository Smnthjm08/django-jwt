import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  let { user } = useContext(AuthContext);

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
