import { useState } from "react";
import { authSliceActions } from "../store/index.js";
import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";

const Auth = () => {
  const [data, setData] = useState({ email: "", password: "" });
  function handleOnchangeEvent(event) {
    const { id: name, value } = event.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  const distpatch = useDispatch();
  function handleOnClickEvent() {
    const email = data.email;
    const password = data.password;

    if (
      email &&
      password &&
      email === "abc@gmail.com" &&
      password === "123456"
    ) {
      const user = email.substring(0, email.indexOf("@"));
      distpatch(authSliceActions.login({ activeUser: user }));
    }
  }
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={handleOnchangeEvent}
              value={data.email}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={handleOnchangeEvent}
              value={data.password}
            />
          </div>
          <button onClick={handleOnClickEvent}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
