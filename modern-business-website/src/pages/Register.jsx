import { useState } from "react";
import "../styles/auth.css";
import { Link } from "react-router-dom";


export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register data:", formData);
    // TODO: API call
  };

  return (
    <section className="auth-wrapper">
      <div className="auth-card animate-fade">
        <h2 className="auth-title">Create Account ✨</h2>
        <p className="auth-subtitle">
          Join us and start your learning journey
        </p>

        <form onSubmit={handleSubmit} noValidate>
          {/* Name */}
          <div className="input-group">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="name">Full Name</label>
          </div>

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
            <label htmlFor="email">Email Address</label>
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
            Sign Up
          </button>
        </form>

        <div className="auth-footer">
          <span>Already have an account?</span>
          <a href="/login">Login</a>
        </div>
      </div>
    </section>
  );
}
