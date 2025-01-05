import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useContext(AuthContext);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(username, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleUsername}
          name="username"
          placeholder="Enter Username"
        />
        <input
          type="password"
          value={password}
          onChange={handlePassword}
          name="password"
          placeholder="Enter Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
