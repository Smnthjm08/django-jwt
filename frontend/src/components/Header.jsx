import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";

const Header = () => {
  let { user, logoutUser } = useContext(AuthContext);
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <span> | </span>
      {user ? (
        <button onClick={logoutUser}>Logout</button>
      ) : (
        <Link to={"/login"}>Login</Link>
      )}
      {user && <p>Hello {user.username}</p>}
    </div>
  );
};

export default Header;
