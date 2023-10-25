import { useState, useRef } from "react";
import classes from "./Login.module.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <div className={classes.container}>
      <section className={classes.auth}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              ref={emailInputRef}
              placeholder="abC@xyz.com"
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              placeholder="password"
              type="password"
              id="password"
              ref={passwordInputRef}
              required
            />
          </div>
          <div className={classes.actions}>
            {!loading && (
              <button
                type="submit"
                className={classes.loginBtn}
                onClick={onSubmitHandler}>
                {isLogin ? "Log In" : "Create Account"}{" "}
              </button>
            )}

            {loading && <h2>Submitting Data...</h2>}

            {!loading && (
              <button
                type="button"
                className={classes.toggle}
                onClick={switchAuthModeHandler}>
                {isLogin ? "Create new account" : "Login with existing account"}
              </button>
            )}
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
