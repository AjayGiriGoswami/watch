import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <label>Email</label>
        <input type="text" name="username" required/>

        <label>Password</label>
        <input type="password" name="password"required />

        <label>
          <input
            type="checkbox"
            name="terms"
            required
          />
          I agree to the terms and conditions
        </label>

        <button type="submit">Submit</button>
        <br />
        <p>
        Don't have an account? <Link to="/Signup">Signup</Link>
        </p>
        <p>
          Forgot Password? <Link to="/Forgot">Forgot Password</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
