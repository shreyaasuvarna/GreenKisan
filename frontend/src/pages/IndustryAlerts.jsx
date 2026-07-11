import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { addAlert } from "../utils/alertHelper";

function IndustryAlerts() {
  const { t } = useLanguage();
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState({});

  const industryId = localStorage.getItem("industryId");

  // Load backend + local alerts
  const loadAlerts = async () => {
    try {
      // Backend notifications for industry
      const res = await fetch(`http://localhost:5000/api/industry-notifications/${industryId}`);
      const backendAlerts = await res.json();

      const formattedBackend = backendAlerts.map((n) => ({
        type: n.type || "booking", // "booking", "confirmation", "rejection"
        title: n.title || "Booking Update",
        message: n.message,
        bookingId: n.bookingId || null,
        read: n.read || false,
        date: new Date(n.createdAt).toLocaleString(),
      }));

      // Local alerts
      const localAlerts = JSON.parse(localStorage.getItem("industryAlerts") || "[]");

      setAlerts([...formattedBackend, ...localAlerts]);
    } catch (err) {
      console.error("Failed to load alerts:", err);
    }
  };

  useEffect(() => {
    loadAlerts();
  }, []);

  const markAsRead = (index) => {
    const updated = [...alerts];
    updated[index].read = true;
    setAlerts(updated);
    localStorage.setItem("industryAlerts", JSON.stringify(updated.filter((a) => !a.bookingId)));
  };

  const markAllAsRead = () => {
    const updated = alerts.map((a) => ({ ...a, read: true }));
    setAlerts(updated);
    localStorage.setItem("industryAlerts", JSON.stringify(updated.filter((a) => !a.bookingId)));
  };

  const getAlertIcon = (type) => {
    switch (type) {
      case "confirmation":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case "rejection":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
          </svg>
        );
    }
  };

  const getAlertColor = (type) => {
    switch (type) {
      case "confirmation":
        return "border-green-500";
      case "rejection":
        return "border-red-500";
      default:
        return "border-indigo-500";
    }
  };

  const getIconBgColor = (type) => {
    switch (type) {
      case "confirmation":
        return "bg-green-100 text-green-600";
      case "rejection":
        return "bg-red-100 text-red-600";
      default:
        return "bg-indigo-100 text-indigo-600";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">{t("alertsTitle") ?? "Notifications"}</h1>
            <p className="text-gray-600 mt-1">
              {alerts.filter(a => !a.read).length} unread notification{alerts.filter(a => !a.read).length !== 1 ? 's' : ''}
            </p>
          </div>
          {alerts.length > 0 && (
            <button onClick={markAllAsRead} className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
              {t("markAllRead") ?? "Mark all as read"}
            </button>
          )}
        </div>

        {alerts.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Notifications</h3>
            <p className="text-gray-500">{t("noAlerts") ?? "You're all caught up! We'll notify you when there are updates."}</p>
          </div>
        ) : (
          <div className="space-y-4">
            {alerts.map((alert, index) => (
              <div 
                key={index} 
                className={`bg-white p-4 rounded-lg shadow hover:shadow-md transition border-l-4 ${
                  !alert.read ? getAlertColor(alert.type) : "border-gray-300"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded ${getIconBgColor(alert.type)}`}>
                    {getAlertIcon(alert.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-lg">{alert.title}</h3>
                      {!alert.read && (
                        <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">
                          New
                        </span>
                      )}
                    </div>
                    <p className="text-gray-700 mb-2">{alert.message}</p>

                    <div className="flex justify-between items-center text-xs text-gray-500 mt-3 pt-3 border-t border-gray-100">
                      <span>{alert.date}</span>
                      {!alert.read && (
                        <button 
                          onClick={() => markAsRead(index)}
                          className="text-indigo-600 hover:text-indigo-800 font-medium"
                        >
                          Mark as read
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default IndustryAlerts;