import React, { useState } from "react";

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword ] = useState("")


  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log(email, password);
    
  }

  return (
    <div className="uk-login-container" style={{ marginTop: "180px" }}>
      <div className="uk-card uk-card-default">
        <form>
          <label>
            <h3>LogIn</h3>
          </label>
          <div className="uk-margin">
            <div className="uk-inline">
              <label>Email</label>
              <span className="uk-form-icon" uk-icon="icon: user"></span>
              <input
                className="uk-input"
                type="email"
                aria-label="Not clickable icon"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="uk-margin">
            <div className="uk-inline">
              <label>Password</label>
              <span
                className="uk-form-icon uk-form-icon-flip"
                uk-icon="icon: lock"
              ></span>
              <input
                className="uk-input"
                type="password"
                aria-label="Not clickable icon"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button onClick={handleLogin}>SingUp</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
