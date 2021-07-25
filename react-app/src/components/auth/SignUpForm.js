import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";
import "./SignupForm.css";

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/posts/" />;
  }

  return (
    <form onSubmit={onSignUp} className="modal2">
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className="title_container">
        <h2>Join Our Community!</h2>
      </div>
      <div>
        {/* <label>User Name</label> */}
        <div className="input_field">
          {" "}
          <span>
            <i aria-hidden="true" className="fa fa-user"></i>{" "}
          </span>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
      </div>
      <div>
        {/* <label>Email</label> */}
        <div className="input_field">
          {" "}
          <span>
            <i aria-hidden="true" className="fa fa-envelope" />{" "}
          </span>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
      </div>
      <div>
        {/* <label>Password</label> */}
        <div className="input_field">
          {" "}
          <span>
            <i aria-hidden="true" className="fa fa-lock"></i>{" "}
          </span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
      </div>
      <div>
        {/* <label>Repeat Password</label> */}
        <div className="input_field">
          {" "}
          <span>
            <i aria-hidden="true" className="fa fa-lock"></i>{" "}
          </span>
          <input
            type="password"
            name="repeat_password"
            placeholder="Re-type Password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
      </div>
      <button type="submit" className="button">
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
