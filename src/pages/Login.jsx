import { useState } from "react";
import "./login.scss";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('submitting')
    axios.post('http://localhost:3000/login', {email, password})
    .then(response => {
      localStorage.setItem('token', response.data.token);
      navigate("/admin/dashboard/");
    })
    .catch(err => {
      console.log(err)
    })
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>CODEMAX</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="your Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="your Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="btn-section">
            <button className="homeBtn">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
