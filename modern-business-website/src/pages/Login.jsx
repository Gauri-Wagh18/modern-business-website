import { useState } from "react";
import "../styles/auth.css";
import { Link } from "react-router-dom";


export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", formData);
  };

  return (
    <section className="auth-wrapper">
      <div className="auth-card animate-fade">
        <h2 className="auth-title">Welcome Back 👋</h2>
        <p className="auth-subtitle">
          Login to continue your learning journey
        </p>

        <form onSubmit={handleSubmit} noValidate>
          {/* Email */}
          <div className="input-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email address</label>
          </div>

          {/* Password */}
          <div className="input-group">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label htmlFor="password">Password</label>
          </div>

          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>

        <div className="auth-footer">
          <span>Don’t have an account?</span>
          <a href="/register">Create account</a>
        </div>
      </div>
    </section>
  );
}
