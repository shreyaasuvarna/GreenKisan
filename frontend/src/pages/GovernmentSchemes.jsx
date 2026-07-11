import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "../styles/GovtSchemes.css";

function GovernmentSchemes() {
  const { t, language, setLanguage } = useLanguage();

  const schemes = [
    { title: t("scheme1_title") ?? "🌿 Gobardhan Scheme", description: t("scheme1_desc") ?? "Converts organic waste into compost and biogas.", link: "https://swachhbharatmission.gov.in/GOBARdhan/" },
    { title: t("scheme2_title") ?? "♻️ Organic & Bio-waste Composting – KVK DK", description: t("scheme2_desc") ?? "Converts crop waste into organic fertilizer.", link: "https://www.kvkdk.org/DCR-SC-SP-Programme.html" },
    { title: t("scheme3_title") ?? "♻️ Waste Management in Karnataka", description: t("scheme3_desc") ?? "Covers composting and organic waste management.", link: "https://planning.karnataka.gov.in/storage/pdf-files/Economic%20Survey/Chapter%20Eng%2020.pdf" },
    { title: t("scheme4_title") ?? "💧 National Bioenergy Mission (NBEM)", description: t("scheme4_desc") ?? "Promotes bioenergy from agricultural waste.", link: "https://mnre.gov.in/" },
    { title: t("scheme5_title") ?? "🌱 Karnataka Compost Development Corporation", description: t("scheme5_desc") ?? "Converts agri-waste into compost.", link: "https://thebetterindia.com/88541/bengaluru-waste-converted-to-compost/" },
    { title: t("scheme6_title") ?? "🧪 KSPCB – Waste Management", description: t("scheme6_desc") ?? "Supports waste management programs across Karnataka.", link: "https://www.mospi.gov.in/sites/default/files/main_menu/Seminar/Waste%20management%20in%20Karnataka-KSPCB.pdf" },
    { title: t("scheme7_title") ?? "💡 MGIRED – Bioenergy Projects", description: t("scheme7_desc") ?? "Promotes eco-friendly rural energy systems.", link: "https://mgired.karnataka.gov.in/3/bioenergy/en" },
    { title: t("scheme8_title") ?? "🚜 Bengaluru Organic Farming Program", description: t("scheme8_desc") ?? "Encourages organic farming and composting.", link: "https://bengaluruurban.nic.in/en/departments/agriculture-department/" },
    { title: t("scheme9_title") ?? "🌻 NPMCR – Crop Residue Policy", description: t("scheme9_desc") ?? "Policy to reduce residue burning and promote composting.", link: "https://www.agriwelfare.gov.in/Documents/NPMCR_1.pdf" },
  ];

  return (
    <div className="dashboard-container">
      <header className="header">
        <div className="logo-container">🌱 {t("title")}</div>
        <nav className="nav-links">
          <Link to="/" className="nav-link">{t("home")}</Link>
          <Link to="/farmer-dashboard" className="nav-link">{t("dashboard_title")}</Link>
          <Link to="/alerts" className="nav-link">{t("alerts")}</Link>
          <Link to="/payments" className="nav-link">{t("payments")}</Link>
        </nav>
        <div className="auth-controls">
          <div className="lang-dropdown">
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="en">English</option>
              <option value="kn">ಕನ್ನಡ</option>
            </select>
          </div>
          <Link to="/login-selection" className="logout-btn">{t("logout") ?? "Logout"}</Link>
        </div>
      </header>

      <h1 className="dashboard-title">{t("govtSchemesTitle") ?? "Government Schemes for Farmers"}</h1>

      <div className="schemes-container">
        {schemes.map((scheme, index) => (
          <div key={index} className="scheme-card">
            <h2>{scheme.title}</h2>
            <p>{scheme.description}</p>
            <a href={scheme.link} target="_blank" rel="noopener noreferrer" className="learn-more-btn">
              {t("learnMore") ?? "Learn More"}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GovernmentSchemes;
