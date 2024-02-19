import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Forgot = () => {
  return (
    <div>
      <div className="login-container">
        <h1>Forgot Password</h1>
        <form>
          <label>Email</label>
          <input type="text" name="username" required />

          <label>
            <input type="checkbox" name="terms" required />I agree to the terms
            and conditions
          </label>

          <button type="submit">Submit</button>
          <br />
          <p>
            Not a member? <Link to="/Signup">Signup</Link>
          </p>
          <p>
            Already have a Account? <Link to="/Login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
