import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./Login.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/authSlice';



const Login = () => {
  const registeredUsers = useSelector((state) => state.auth.users);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');


  const handleLogin = (e) => {
    e.preventDefault()
    const user = registeredUsers.find((user) => user.email === email && user.password === password);
    if (user) {
      dispatch(loginUser({ email, password }));
      navigate("/home")
    } else {
      setLoginError('Invalid email or password');
    }
  };

  return (
    <header className="App-header">
      <section className={styles.dashbord}>
        <img src={require("../../assets/panterra-logo (1).png")} alt="logo" />
        <h1>Admin Dashboard</h1>
        <h5>Streams Admin Dashboard Key features include</h5>
        <ul>
          <li>Browers-based use and account level administrastion</li>
          <li>Single loggin services for all commmunication</li>
          <li>Manage all user from anywhere in the world</li>
          <li>constomize features for each user at anytime</li>
        </ul>
      </section>
      <Card>
        <h2>Login</h2>
        <form action="">
          <div className={styles.inputs_container}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={(e) => handleLogin(e)}>Login</button>
          {loginError && <p>{loginError}</p>}
          <p className={styles.navigate}>Have an Account<Link to="/">Rgister</Link></p>
          </div>
        </form>
      </Card>
    </header>
  );
};

export default Login;