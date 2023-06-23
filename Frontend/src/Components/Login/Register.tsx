import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../ReduxImp/authSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch: ThunkDispatch<string, string, any> = useDispatch();

  const registerHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(name, email, password);
    dispatch(signUpUser({ email, name, password }));
  };

  return (
    <div className="uk-Register-container" style={{ marginTop: "180px" }}>
      <div className="uk-card uk-card-default">
        <form>
          <label>
            <h3>Register</h3>
          </label>
          <div className="uk-margin">
            <div className="uk-inline">
              <label>Name</label>
              <span className="uk-form-icon" uk-icon="icon: user"></span>
              <input
                className="uk-input"
                type="text"
                aria-label="Not clickable icon"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
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
          <button onClick={registerHandle}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
