import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./login.module.css";
import { login } from "../backend/auth/auth.api";
function Login() {
  const navigate = useNavigate();
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleLogin = (e) => {
    console.log(formdata);
    e.preventDefault();
    login(formdata)
      .then((response) => {
        console.log(response.data);
        toast.success(response.data);
        if (response.status == 200) {
          alert("Loggin successfull");
          navigate("/");
        }
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  return (
    <div className={styles.container2}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} className={styles.forr}>
        <input
          required
          placeholder="Enter your email"
          type="email"
          value={formdata.email}
          onChange={(e) => setFormData({ ...formdata, email: e.target.value })}
        />
        <input
          placeholder="Enter your password"
          required
          type="password"
          value={formdata.password}
          onChange={(e) =>
            setFormData({ ...formdata, password: e.target.value })
          }
        />
        <button type="submit" className={styles.SUBMIT}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
