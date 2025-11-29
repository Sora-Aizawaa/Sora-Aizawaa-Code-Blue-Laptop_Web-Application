import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function ProtectedRoute({ children }) {
  const loggedIn = sessionStorage.getItem("isLoggedIn"); // ⬅ GANTI

  if (loggedIn !== "true") {
    return <Navigate to="/login" />;
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
