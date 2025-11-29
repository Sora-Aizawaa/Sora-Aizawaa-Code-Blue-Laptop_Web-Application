import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "Muhammadreza127@") {
      sessionStorage.setItem("isLoggedIn", "true");
      navigate("/receipt"); // setelah login masuk ke receipt
    } else {
      alert("Username atau password salah!");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Login Dulu</h2>

      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
