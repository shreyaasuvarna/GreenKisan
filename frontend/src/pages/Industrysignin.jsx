import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "../styles/IndustryAuth.css";
import API_URL from "../config/api";


function Industrysignin() {
  const navigate = useNavigate();
  const { t, language, setLanguage } = useLanguage();
  const [form, setForm] = useState({ login: "", password: "" });

  const updateForm = (e) => setForm({ ...form, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/api/industry/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ login: form.login, password: form.password }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("industryToken", data.token);
        localStorage.setItem("industryId", data.industry._id);
        localStorage.setItem("industryEmail", data.industry.email || "");
        navigate("/industry-dashboard");
      } else {
        alert(data.message || "Invalid login");
      }
    } catch {
      alert("Error connecting to server");
    }
  };

  return (
    <div className="auth-container">
      <header className="auth-header">
        <div className="logo-container">🌱 {t("title")}</div>
        <nav className="nav-links">
          <Link to="/" className="nav-link">{t("home")}</Link>
          <Link to="/login-selection" className="nav-link">{t("backToLogin") ?? "Back to Login"}</Link>
          <div className="lang-dropdown" style={{ marginLeft: "20px" }}>
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="en">English</option>
              <option value="kn">ಕನ್ನಡ</option>
            </select>
          </div>
        </nav>
      </header>

      <main className="auth-main">
        <div className="auth-card">
          <div className="auth-header-section">
            <span className="auth-icon">🏭</span>
            <h1>{t("industrySignIn") ?? "Industry Sign In"}</h1>
            <p>{t("industryPortalDesc") ?? "to continue to Green Kisan Industry Portal"}</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>{t("emailOrPhone") ?? "Email or Phone"}</label>
              <input id="login" type="text" className="form-input" placeholder={t("emailPlaceholder") ?? "Enter your email or phone"} required onChange={updateForm} />
            </div>
            <div className="form-group">
              <label>{t("password") ?? "Password"}</label>
              <input id="password" type="password" className="form-input" placeholder={t("passwordPlaceholder") ?? "Enter your password"} required onChange={updateForm} />
            </div>
            <div className="forgot-password">
              <a className="forgot-link" href="#">{t("forgotPassword") ?? "Forgot password?"}</a>
            </div>
            <button className="auth-btn" type="submit">{t("signIn") ?? "Sign In"}</button>
          </form>

          <div className="divider">
            <span className="divider-text">{t("or") ?? "or"}</span>
          </div>

          <div className="auth-links">
            <p>
              {t("noAccount") ?? "Don't have an account?"}{" "}
              <Link to="/industry-signup" className="auth-link">{t("signUp") ?? "Sign up"}</Link>
            </p>
            <Link to="/login-selection" className="back-link">← {t("backToLoginSelection") ?? "Back to Login Selection"}</Link>
          </div>
        </div>
      </main>

      <footer>
        <p>© 2025 Green Kisan. {t("allRights") ?? "All rights reserved."}</p>
      </footer>
    </div>
  );
}

export default Industrysignin;
