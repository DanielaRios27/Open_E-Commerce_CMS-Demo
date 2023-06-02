import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { context } from "../../../App";
import { useContext, useState } from "react";

export const Login = () => {
  const { user, setUser } = useContext(context);

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handlerLogin = (e) => {
    e.preventDefault();
    if (input.email != user.email || input.password != user.password) {
      return alert("Usuario o contraseña invalidos");
    } else {
      setUser((prevState) => ({
        ...prevState,
        logged: true,
      }));
    }
  };

  const handlerInput = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className={styles.login}>
      <span onClick={handlerLogin} className={styles.loginTitle}>
        Log in
      </span>
      <form onSubmit={handlerLogin} className={styles.loginForm}>
        <label htmlFor="email">Email</label>
        <input
          value={input.email}
          onChange={handlerInput}
          className={styles.loginInput}
          type="text"
          id="email"
          name="email"
          placeholder="Enter your email..."
          required
        />
        <label htmlFor="password">Password</label>
        <input
          value={input.password}
          onChange={handlerInput}
          className={styles.loginInput}
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password..."
          required
        />
        <button type="submit" className={styles.loginButton}>
          Log in
        </button>
        <Link to="/signup">
          <button className={styles.loginRegisterButton}>Sign up</button>
        </Link>
      </form>
    </div>
  );
};
