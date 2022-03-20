import React, { useState } from "react";
import { useRef } from "react";
import axios from "axios";

import classes from "./AuthForm.module.css";
import { Link } from "react-router-dom";

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [admin, setAdmin] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const admin = {
      username: enteredEmail,
      password: enteredPassword,
    };

    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";

    axios
      .post("http://localhost:8080/api/v1/books/authcheck", admin)
      .then((response) => {
        if (response.data != null) {
          setAdmin(true);
        } else {
          console.log("fail");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      {!admin && (
        <section className={classes.auth}>
          <h1>Login</h1>
          <form onSubmit={submitHandler}>
            <div className={classes.control}>
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" required ref={emailInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Your Password</label>
              <input
                type="password"
                id="password"
                required
                ref={passwordInputRef}
              />
            </div>
            <div className={classes.actions}>
              <button>Login</button>
            </div>
          </form>
        </section>
      )}
      {admin && (
        <Link to={"add"} className={classes.proceed}>
          Proceed to adding a book
        </Link>
      )}
    </React.Fragment>
  );
};

export default AuthForm;
