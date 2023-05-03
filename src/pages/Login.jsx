import "./login.scss";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>CODEMAX</h2>
        <form>
          <input type="email" placeholder="your Email" />
          <input type="password" placeholder="your Password"/>
          <div className="btn-section">
            <div className="homeBtn">Login</div>
            <Link className="homeBtn" to='/'><div >Home</div></Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
