import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./signup.module.css";
import { signup } from "../backend/auth/auth.api";

function Signup() {
  const navigate = useNavigate();
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSignup = (e) => {
    e.preventDefault();
    signup(formdata)
      .then((response) => {
        console.log(response);
        toast.success(response.data.message);
        if (response.status == 200) {
          alert("Please Login Now");
          navigate("/login");
        }
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  return (
    <div className={styles.container2}>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          placeholder="Enter your name"
          required
          type="text"
          value={formdata.name}
          onChange={(e) => setFormData({ ...formdata, name: e.target.value })}
        />
        <input
          placeholder="Enter your email"
          required
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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
