import React, { useState } from "react";
import AuthStrategy from "./AuthStrategy";
import LocalAuthStrategy from "./LocalAuthStrategy";
import OAuthStrategy from "./OAuthStrategy";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [authStrategy, setAuthStrategy] = useState(new LocalAuthStrategy());

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await authStrategy.authenticate(data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select onChange={(e) => setAuthStrategy(e.target.value === "local" ? new LocalAuthStrategy() : new OAuthStrategy())}>
          <option value="local">Local Authentication</option>
          <option value="oauth">OAuth Authentication</option>
        </select>

        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={data.email}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={data.password}
          required
        />

        {error && <div className="error">{error}</div>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

