import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "../styles/IndustryAuth.css";
import API_URL from "../config/api";


function Industrysignup() {
  const navigate = useNavigate();
  const { t, language, setLanguage } = useLanguage();
  const [form, setForm] = useState({ companyName: "", email: "", phone: "", address: "", password: "", confirmPassword: "" });

  const updateForm = (e) => setForm({ ...form, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const res = await fetch(`${API_URL}/api/industry/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ companyName: form.companyName, email: form.email, phone: form.phone, address: form.address, password: form.password }),
      });
      const data = await res.json();
      if (res.ok) {
        navigate("/industry-signin");
      } else {
        alert(data.message || "Signup failed");
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
            <h1>{t("createAccount") ?? "Create your account"}</h1>
            <p>{t("continueToGreenKisan") ?? "to continue to Green Kisan"}</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>{t("companyName") ?? "Company name"}</label>
              <input id="companyName" type="text" className="form-input" placeholder={t("companyNamePlaceholder") ?? "Enter your company name"} required onChange={updateForm} />
            </div>
            <div className="form-group">
              <label>{t("emailOrPhone") ?? "Email"}</label>
              <input id="email" type="text" className="form-input" placeholder={t("emailPlaceholder") ?? "Enter your email"} required onChange={updateForm} />
            </div>
            <div className="form-group">
              <label>{t("phoneNumber") ?? "Phone Number"}</label>
              <input id="phone" type="tel" className="form-input" placeholder={t("phonePlaceholder") ?? "Enter company phone number"} required onChange={updateForm} />
            </div>
            <div className="form-group">
              <label>{t("companyAddress") ?? "Company Address"}</label>
              <input id="address" type="text" className="form-input" placeholder={t("companyAddressPlaceholder") ?? "Enter company address"} required onChange={updateForm} />
            </div>
            <div className="form-group">
              <label>{t("password") ?? "Password"}</label>
              <input id="password" type="password" className="form-input" placeholder={t("createPassword") ?? "Create a strong password"} required onChange={updateForm} />
            </div>
            <div className="form-group">
              <label>{t("confirmPassword") ?? "Confirm password"}</label>
              <input id="confirmPassword" type="password" className="form-input" placeholder={t("confirmPasswordPlaceholder") ?? "Confirm your password"} required onChange={updateForm} />
            </div>
            <button className="auth-btn" type="submit">{t("createAccountBtn") ?? "Create Account"}</button>
          </form>

          <div className="auth-links">
            <p>
              {t("haveAccount") ?? "Already have an account?"}{" "}
              <Link to="/industry-signin" className="auth-link">{t("signIn") ?? "Sign in"}</Link>
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

export default Industrysignup;
