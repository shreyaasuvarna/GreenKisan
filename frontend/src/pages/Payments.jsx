import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "../styles/Payments.css";

function Payments() {
  const navigate = useNavigate();
  const { t, language, setLanguage } = useLanguage();
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("payments") || "[]");
    setPayments(stored);
  }, []);

  const markAsReceived = (index) => {
    const updated = [...payments];
    updated[index].status = t("received") ?? "Received";
    localStorage.setItem("payments", JSON.stringify(updated));
    setPayments(updated);
  };

  return (
    <div className="dashboard-container">
      <header className="header">
        <div className="logo-container">🌱 {t("title")}</div>
        <nav className="nav-links">
          <Link to="/" className="nav-link">{t("home") ?? "Home"}</Link>
          <Link to="/farmer-dashboard" className="nav-link">{t("myDashboard") ?? "My Dashboard"}</Link>
          <Link to="/alerts" className="nav-link">{t("alertsTitle") ?? "Alerts"}</Link>
        </nav>
        <div className="auth-controls">
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="kn">ಕನ್ನಡ</option>
          </select>
          <button className="logout-btn" onClick={() => navigate("/login-selection")}>
            {t("logout") ?? "Logout"}
          </button>
        </div>
      </header>

      <h1 className="dashboard-title">{t("paymentsTitle") ?? "Payments"}</h1>

      <div className="payments-container">
        {payments.length === 0 ? (
          <p>{t("noPayments") ?? "No payments yet."}</p>
        ) : (
          payments.map((payment, index) => (
            <div key={index} className="payment-card">
              <p><strong>{t("crop") ?? "Crop:"}</strong> {payment.cropName}</p>
              <p><strong>{t("quantity") ?? "Quantity:"}</strong> {payment.quantity} kg</p>
              <p><strong>{t("amount") ?? "Amount:"}</strong> ₹{payment.amount}</p>
              <p><strong>{t("status") ?? "Status:"}</strong> {payment.status}</p>
              <p><strong>{t("date") ?? "Date:"}</strong> {payment.date}</p>
              {payment.status !== (t("received") ?? "Received") && (
                <button onClick={() => markAsReceived(index)} className="btn-mark">
                  {t("markReceived") ?? "Mark as Received"}
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Payments;
