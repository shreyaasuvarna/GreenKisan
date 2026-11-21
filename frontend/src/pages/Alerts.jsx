// // // // // //frontend/src/pages/Alerts.jsx

// // // // // import React, { useState, useEffect } from "react";
// // // // // import "../styles/Alerts.css";
// // // // //   import { addAlert } from "../utils/alertHelper";


// // // // // import { useLanguage } from "../context/LanguageContext"; // ✅ added

// // // // // function Alerts() {
// // // // //   const { t } = useLanguage(); // ✅ added

// // // // //   const [alerts, setAlerts] = useState([]);

// // // // //   useEffect(() => {
// // // // //     const storedAlerts = JSON.parse(localStorage.getItem("alerts") || "[]");
// // // // //     setAlerts(storedAlerts);
// // // // //   }, []);

// // // // //   const markAsRead = (index) => {
// // // // //     const updated = [...alerts];
// // // // //     updated[index].read = true;
// // // // //     setAlerts(updated);
// // // // //     localStorage.setItem("alerts", JSON.stringify(updated));
// // // // //   };

// // // // //   const markAllAsRead = () => {
// // // // //     const updated = alerts.map((alert) => ({ ...alert, read: true }));
// // // // //     setAlerts(updated);
// // // // //     localStorage.setItem("alerts", JSON.stringify(updated));
// // // // //   };

// // // // // const updateStatus = async (bookingId, status) => {
// // // // //   await axios.put(`/api/bookings/${bookingId}/status`, { status });

// // // // //   if (status === "Accepted") {
// // // // //     addAlert(
// // // // //       "Booking Accepted",
// // // // //       "You have accepted a booking. The industry will be notified."
// // // // //     );
// // // // //   } else {
// // // // //     addAlert(
// // // // //       "Booking Rejected",
// // // // //       "You have rejected a booking request."
// // // // //     );
// // // // //   }

// // // // //   loadBookings();
// // // // // };


// // // // //   return (
// // // // //     <div className="alerts-container">
// // // // //       <h1 className="alerts-title">{t("alertsTitle") ?? "Alerts"}</h1>

// // // // //       <button className="btn-mark-all" onClick={markAllAsRead}>
// // // // //         {t("markAllRead") ?? "Mark all as read"}
// // // // //       </button>

// // // // //       <div className="alerts-list">
// // // // //         {alerts.length === 0 ? (
// // // // //           <p>{t("noAlerts") ?? "No alerts yet."}</p>
// // // // //         ) : (
// // // // //           alerts.map((alert, index) => (
// // // // //             <div
// // // // //               key={index}
// // // // //               className={`alert-card ${alert.read ? "read" : "unread"}`}
// // // // //               onClick={() => markAsRead(index)}
// // // // //             >
// // // // //               <strong>{alert.title}</strong>
// // // // //               <p>{alert.message}</p>
// // // // //               <span className="alert-date">{alert.date}</span>
// // // // //             </div>
// // // // //           ))
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default Alerts;

// // // // //frontend/src/pages/Alerts.jsx

// // // // import React, { useState, useEffect } from "react";
// // // // import { useLanguage } from "../context/LanguageContext";
// // // // import { addAlert } from "../utils/alertHelper";

// // // // function Alerts() {
// // // //   const { t } = useLanguage();
// // // //   const [alerts, setAlerts] = useState([]);
// // // //   const [loading, setLoading] = useState({});

// // // //   useEffect(() => {
// // // //     loadAlerts();
// // // //   }, []);

// // // //   const loadAlerts = () => {
// // // //     const storedAlerts = JSON.parse(localStorage.getItem("alerts") || "[]");
// // // //     setAlerts(storedAlerts);
// // // //   };

// // // //   const markAsRead = (index) => {
// // // //     const updated = [...alerts];
// // // //     updated[index].read = true;
// // // //     setAlerts(updated);
// // // //     localStorage.setItem("alerts", JSON.stringify(updated));
// // // //   };

// // // //   const markAllAsRead = () => {
// // // //     const updated = alerts.map((alert) => ({ ...alert, read: true }));
// // // //     setAlerts(updated);
// // // //     localStorage.setItem("alerts", JSON.stringify(updated));
// // // //   };

// // // //   const handleBookingAction = async (bookingId, status, alertIndex) => {
// // // //     setLoading({ ...loading, [bookingId]: true });

// // // //     try {
// // // //       const response = await fetch(`http://localhost:5000/api/bookings/${bookingId}/status`, {
// // // //         method: "PUT",
// // // //         headers: { "Content-Type": "application/json" },
// // // //         body: JSON.stringify({ status })
// // // //       });

// // // //       const data = await response.json();

// // // //       if (response.ok) {
// // // //         // Add new alert based on action
// // // //         if (status === "Confirmed" || status === "Accepted") {
// // // //           addAlert(
// // // //             "Booking Accepted",
// // // //             "You have accepted a booking. The industry will be notified."
// // // //           );
// // // //         } else if (status === "Rejected") {
// // // //           addAlert(
// // // //             "Booking Rejected",
// // // //             "You have rejected a booking request."
// // // //           );
// // // //         }

// // // //         // Mark current alert as read and handled
// // // //         const updated = [...alerts];
// // // //         updated[alertIndex].read = true;
// // // //         updated[alertIndex].handled = true;
// // // //         setAlerts(updated);
// // // //         localStorage.setItem("alerts", JSON.stringify(updated));

// // // //         // Reload alerts to show new notification
// // // //         setTimeout(loadAlerts, 500);
// // // //       } else {
// // // //         alert(data.message || "Failed to update booking status");
// // // //       }
// // // //     } catch (error) {
// // // //       console.error("Error updating booking:", error);
// // // //       alert("Error updating booking status");
// // // //     } finally {
// // // //       setLoading({ ...loading, [bookingId]: false });
// // // //     }
// // // //   };

// // // //   const getAlertIcon = (type) => {
// // // //     switch (type) {
// // // //       case "booking":
// // // //         return (
// // // //           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
// // // //           </svg>
// // // //         );
// // // //       case "success":
// // // //         return (
// // // //           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
// // // //           </svg>
// // // //         );
// // // //       case "info":
// // // //         return (
// // // //           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// // // //           </svg>
// // // //         );
// // // //       default:
// // // //         return (
// // // //           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
// // // //           </svg>
// // // //         );
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
// // // //       <div className="max-w-4xl mx-auto">
// // // //         {/* Header */}
// // // //         <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
// // // //           <div>
// // // //             <h1 className="text-4xl font-bold text-gray-900 mb-2">
// // // //               {t("alertsTitle") ?? "Alerts"}
// // // //             </h1>
// // // //             <p className="text-gray-600">
// // // //               {alerts.filter(a => !a.read).length} unread notification{alerts.filter(a => !a.read).length !== 1 ? 's' : ''}
// // // //             </p>
// // // //           </div>
          
// // // //           {alerts.length > 0 && (
// // // //             <button 
// // // //               onClick={markAllAsRead}
// // // //               className="bg-white text-indigo-600 border-2 border-indigo-600 font-semibold py-2 px-6 rounded-lg hover:bg-indigo-600 hover:text-white transition-all shadow-md"
// // // //             >
// // // //               {t("markAllRead") ?? "Mark all as read"}
// // // //             </button>
// // // //           )}
// // // //         </div>

// // // //         {/* Alerts List */}
// // // //         {alerts.length === 0 ? (
// // // //           <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
// // // //             <div className="max-w-md mx-auto">
// // // //               <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
// // // //                 <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
// // // //                 </svg>
// // // //               </div>
// // // //               <h3 className="text-2xl font-bold text-gray-900 mb-2">No Alerts Yet</h3>
// // // //               <p className="text-gray-600">
// // // //                 {t("noAlerts") ?? "You're all caught up! We'll notify you when something needs your attention."}
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //         ) : (
// // // //           <div className="space-y-4">
// // // //             {alerts.map((alert, index) => (
// // // //               <div
// // // //                 key={index}
// // // //                 className={`bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg ${
// // // //                   alert.read ? 'opacity-75' : 'border-l-4 border-indigo-500'
// // // //                 }`}
// // // //               >
// // // //                 <div className="p-6">
// // // //                   <div className="flex items-start gap-4">
// // // //                     {/* Icon */}
// // // //                     <div className={`rounded-lg p-3 flex-shrink-0 ${
// // // //                       alert.read 
// // // //                         ? 'bg-gray-100 text-gray-500' 
// // // //                         : 'bg-indigo-100 text-indigo-600'
// // // //                     }`}>
// // // //                       {getAlertIcon(alert.type)}
// // // //                     </div>

// // // //                     {/* Content */}
// // // //                     <div className="flex-1 min-w-0">
// // // //                       <div className="flex items-start justify-between gap-4 mb-2">
// // // //                         <h3 className="text-lg font-bold text-gray-900">
// // // //                           {alert.title}
// // // //                         </h3>
// // // //                         {!alert.read && (
// // // //                           <span className="flex-shrink-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
// // // //                             New
// // // //                           </span>
// // // //                         )}
// // // //                       </div>

// // // //                       <p className="text-gray-600 mb-3 whitespace-pre-line">
// // // //                         {alert.message}
// // // //                       </p>

// // // //                       {/* Action Buttons for Booking Alerts */}
// // // //                       {alert.type === "booking" && alert.bookingId && !alert.handled && (
// // // //                         <div className="flex flex-wrap gap-3 mt-4">
// // // //                           <button
// // // //                             onClick={(e) => {
// // // //                               e.stopPropagation();
// // // //                               handleBookingAction(alert.bookingId, "Confirmed", index);
// // // //                             }}
// // // //                             disabled={loading[alert.bookingId]}
// // // //                             className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold py-2 px-5 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
// // // //                           >
// // // //                             {loading[alert.bookingId] ? (
// // // //                               <>
// // // //                                 <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
// // // //                                 Processing...
// // // //                               </>
// // // //                             ) : (
// // // //                               <>
// // // //                                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// // // //                                 </svg>
// // // //                                 Accept Booking
// // // //                               </>
// // // //                             )}
// // // //                           </button>

// // // //                           <button
// // // //                             onClick={(e) => {
// // // //                               e.stopPropagation();
// // // //                               handleBookingAction(alert.bookingId, "Rejected", index);
// // // //                             }}
// // // //                             disabled={loading[alert.bookingId]}
// // // //                             className="flex items-center gap-2 bg-white text-red-600 border-2 border-red-600 font-semibold py-2 px-5 rounded-lg hover:bg-red-600 hover:text-white transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
// // // //                           >
// // // //                             {loading[alert.bookingId] ? (
// // // //                               <>
// // // //                                 <div className="w-4 h-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
// // // //                                 Processing...
// // // //                               </>
// // // //                             ) : (
// // // //                               <>
// // // //                                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // // //                                 </svg>
// // // //                                 Reject Booking
// // // //                               </>
// // // //                             )}
// // // //                           </button>
// // // //                         </div>
// // // //                       )}

// // // //                       {/* Already Handled Badge */}
// // // //                       {alert.handled && (
// // // //                         <div className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
// // // //                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// // // //                           </svg>
// // // //                           Already handled
// // // //                         </div>
// // // //                       )}

// // // //                       {/* Date and Mark as Read */}
// // // //                       <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
// // // //                         <span className="text-xs text-gray-500">
// // // //                           {alert.date}
// // // //                         </span>
// // // //                         {!alert.read && (
// // // //                           <button
// // // //                             onClick={(e) => {
// // // //                               e.stopPropagation();
// // // //                               markAsRead(index);
// // // //                             }}
// // // //                             className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
// // // //                           >
// // // //                             Mark as read
// // // //                           </button>
// // // //                         )}
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Alerts;

// // // // frontend/src/pages/Alerts.jsx

// // // import React, { useState, useEffect } from "react";
// // // import { useLanguage } from "../context/LanguageContext";
// // // import { addAlert } from "../utils/alertHelper";

// // // function Alerts() {
// // //   const { t } = useLanguage();

// // //   const [alerts, setAlerts] = useState([]);
// // //   const [loading, setLoading] = useState({});

// // //   // const farmerId = localStorage.getItem("farmerId");

// // //   // useEffect(() => {
// // //   //   loadAlerts();
// // //   // }, []);

// // //   const farmerId = localStorage.getItem("farmerId");

// // // useEffect(() => {
// // //   fetch(`http://localhost:5000/api/notifications/${farmerId}`)
// // //     .then(res => res.json())
// // //     .then(data => setNotifications(data))
// // //     .catch(err => console.error(err));
// // // }, []);

// // //   // ---------------------------
// // //   // LOAD ALERTS FROM BACKEND + LOCALSTORAGE
// // //   // ---------------------------
// // //   const loadAlerts = async () => {
// // //     try {
// // //       // Load backend notifications (booking alerts)
// // //       const res = await fetch(`http://localhost:5000/api/notifications/${farmerId}`);
// // //       const backendAlerts = await res.json();

// // //       const formattedBackendAlerts = backendAlerts.map((n) => ({
// // //         type: "booking",
// // //         title: "New Booking Request",
// // //         message: n.message,
// // //         bookingId: n.bookingId || null,
// // //         read: false,
// // //         handled: false,
// // //         date: new Date(n.createdAt).toLocaleString(),
// // //       }));

// // //       // Load local alerts (for accept/reject confirmation)
// // //       const localAlerts = JSON.parse(localStorage.getItem("alerts") || "[]");

// // //       setAlerts([...formattedBackendAlerts, ...localAlerts]);
// // //     } catch (err) {
// // //       console.error("Failed to load alerts:", err);
// // //     }
// // //   };

// // //   const markAsRead = (index) => {
// // //     const updated = [...alerts];
// // //     updated[index].read = true;
// // //     setAlerts(updated);
// // //     localStorage.setItem("alerts", JSON.stringify(updated.filter((a) => a.type !== "booking")));
// // //   };

// // //   const markAllAsRead = () => {
// // //     const updated = alerts.map((a) => ({ ...a, read: true }));
// // //     setAlerts(updated);
// // //     localStorage.setItem("alerts", JSON.stringify(updated.filter((a) => a.type !== "booking")));
// // //   };

// // //   // ---------------------------
// // //   // ACCEPT OR REJECT BOOKING
// // //   // ---------------------------
// // //   const handleBookingAction = async (bookingId, status, alertIndex) => {
// // //     setLoading((prev) => ({ ...prev, [bookingId]: true }));

// // //     try {
// // //       const res = await fetch(`http://localhost:5000/api/bookings/${bookingId}/farmer-confirm`, {
// // //         method: "PUT",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ action: status }),
// // //       });

// // //       const data = await res.json();

// // //       if (res.ok) {
// // //         if (status === "confirm") {
// // //           addAlert("Booking Accepted", "You have accepted the booking.");
// // //         } else {
// // //           addAlert("Booking Rejected", "You have rejected the booking.");
// // //         }

// // //         // Update UI
// // //         const updatedAlerts = [...alerts];
// // //         updatedAlerts[alertIndex].handled = true;
// // //         updatedAlerts[alertIndex].read = true;

// // //         setAlerts(updatedAlerts);

// // //         setTimeout(loadAlerts, 500);
// // //       } else {
// // //         alert(data.message || "Failed to update booking");
// // //       }
// // //     } catch (err) {
// // //       console.error("Booking update failed:", err);
// // //     }

// // //     setLoading((prev) => ({ ...prev, [bookingId]: false }));
// // //   };

// // //   // ---------------------------
// // //   // ICONS
// // //   // ---------------------------
// // //   const getAlertIcon = (type) => {
// // //     switch (type) {
// // //       case "booking":
// // //         return (
// // //           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
// // //               d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
// // //           </svg>
// // //         );
// // //       default:
// // //         return (
// // //           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
// // //               d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659" />
// // //           </svg>
// // //         );
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4">
// // //       <div className="max-w-4xl mx-auto">
// // //         <div className="mb-8 flex justify-between items-center">
// // //           <h1 className="text-4xl font-bold">{t("alertsTitle") ?? "Alerts"}</h1>
// // //           {alerts.length > 0 && (
// // //             <button
// // //               onClick={markAllAsRead}
// // //               className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow"
// // //             >
// // //               {t("markAllRead") ?? "Mark all as read"}
// // //             </button>
// // //           )}
// // //         </div>

// // //         {alerts.length === 0 ? (
// // //           <p className="text-center text-gray-600">
// // //             {t("noAlerts") ?? "No alerts yet."}
// // //           </p>
// // //         ) : (
// // //           <div className="space-y-4">
// // //             {alerts.map((alert, index) => (
// // //               <div
// // //                 key={index}
// // //                 className={`bg-white rounded-xl shadow p-6 border-l-4 ${
// // //                   !alert.read ? "border-indigo-500" : "border-transparent"
// // //                 }`}
// // //               >
// // //                 <div className="flex gap-4">
// // //                   <div className="p-3 rounded-lg bg-indigo-100 text-indigo-600">
// // //                     {getAlertIcon(alert.type)}
// // //                   </div>

// // //                   <div className="flex-1">
// // //                     <h3 className="text-lg font-bold">{alert.title}</h3>
// // //                     <p className="text-gray-600 my-2">{alert.message}</p>

// // //                     {/* ACTION BUTTONS */}
// // //                     {alert.type === "booking" && !alert.handled && (
// // //                       <div className="flex gap-4 mt-3">
// // //                         <button
// // //                           onClick={() =>
// // //                             handleBookingAction(alert.bookingId, "confirm", index)
// // //                           }
// // //                           disabled={loading[alert.bookingId]}
// // //                           className="px-4 py-2 bg-green-600 text-white rounded-lg"
// // //                         >
// // //                           {loading[alert.bookingId] ? "Processing..." : "Accept"}
// // //                         </button>

// // //                         <button
// // //                           onClick={() =>
// // //                             handleBookingAction(alert.bookingId, "reject", index)
// // //                           }
// // //                           disabled={loading[alert.bookingId]}
// // //                           className="px-4 py-2 bg-red-600 text-white rounded-lg"
// // //                         >
// // //                           {loading[alert.bookingId] ? "Processing..." : "Reject"}
// // //                         </button>
// // //                       </div>
// // //                     )}

// // //                     {alert.handled && (
// // //                       <p className="mt-2 text-sm text-indigo-600 font-medium">
// // //                         Booking already handled
// // //                       </p>
// // //                     )}

// // //                     <div className="flex justify-between text-sm text-gray-500 mt-4">
// // //                       <span>{alert.date}</span>

// // //                       {!alert.read && (
// // //                         <button onClick={() => markAsRead(index)}>
// // //                           Mark as read
// // //                         </button>
// // //                       )}
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Alerts;


// // import React, { useState, useEffect } from "react";
// // import { useLanguage } from "../context/LanguageContext";
// // import { addAlert } from "../utils/alertHelper";

// // function Alerts() {
// //   const { t } = useLanguage();
// //   const [alerts, setAlerts] = useState([]);
// //   const [loading, setLoading] = useState({});
// //   const farmerId = localStorage.getItem("farmerId");

// //   // Load alerts from backend + localstorage
// //   const loadAlerts = async () => {
// //     try {
// //       const res = await fetch(`http://localhost:5000/api/notifications/${farmerId}`);
// //       const backendAlerts = await res.json();

// //       const formattedBackendAlerts = backendAlerts.map((n) => ({
// //         type: "booking",
// //         title: "New Booking Request",
// //         message: n.message,
// //         bookingId: n.bookingId || null,
// //         read: n.read || false,
// //         handled: false,
// //         date: new Date(n.createdAt).toLocaleString(),
// //       }));

// //       const localAlerts = JSON.parse(localStorage.getItem("alerts") || "[]");

// //       setAlerts([...formattedBackendAlerts, ...localAlerts]);
// //     } catch (err) {
// //       console.error("Failed to load alerts:", err);
// //     }
// //   };

// //   useEffect(() => {
// //     loadAlerts();
// //   }, []);

// //   const markAsRead = (index) => {
// //     const updated = [...alerts];
// //     updated[index].read = true;
// //     setAlerts(updated);
// //     localStorage.setItem("alerts", JSON.stringify(updated.filter(a => a.type !== "booking")));
// //   };

// //   const markAllAsRead = () => {
// //     const updated = alerts.map(a => ({ ...a, read: true }));
// //     setAlerts(updated);
// //     localStorage.setItem("alerts", JSON.stringify(updated.filter(a => a.type !== "booking")));
// //   };

// //   const handleBookingAction = async (bookingId, action, alertIndex) => {
// //     setLoading(prev => ({ ...prev, [bookingId]: true }));
// //     try {
// //       const res = await fetch(`http://localhost:5000/api/bookings/${bookingId}/farmer-confirm`, {
// //         method: "PUT",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ action }),
// //       });
// //       const data = await res.json();

// //       if (res.ok) {
// //         addAlert(action === "confirm" ? "Booking Accepted" : "Booking Rejected", data.message);

// //         const updatedAlerts = [...alerts];
// //         updatedAlerts[alertIndex].handled = true;
// //         updatedAlerts[alertIndex].read = true;
// //         setAlerts(updatedAlerts);

// //         setTimeout(loadAlerts, 500);
// //       } else {
// //         alert(data.message || "Failed to update booking");
// //       }
// //     } catch (err) {
// //       console.error(err);
// //     }
// //     setLoading(prev => ({ ...prev, [bookingId]: false }));
// //   };

// //   const getAlertIcon = (type) => {
// //     switch (type) {
// //       case "booking":
// //         return (
// //           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
// //               d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
// //           </svg>
// //         );
// //       default:
// //         return null;
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 py-8 px-4">
// //       <div className="max-w-4xl mx-auto">
// //         <div className="flex justify-between items-center mb-6">
// //           <h1 className="text-3xl font-bold">{t("alertsTitle") ?? "Alerts"}</h1>
// //           {alerts.length > 0 && (
// //             <button onClick={markAllAsRead} className="px-4 py-2 bg-indigo-600 text-white rounded">
// //               {t("markAllRead") ?? "Mark all as read"}
// //             </button>
// //           )}
// //         </div>

// //         {alerts.length === 0 ? (
// //           <p className="text-center text-gray-500">{t("noAlerts") ?? "No alerts yet."}</p>
// //         ) : (
// //           <div className="space-y-4">
// //             {alerts.map((alert, index) => (
// //               <div key={index} className={`bg-white p-4 rounded shadow border-l-4 ${!alert.read ? "border-indigo-500" : "border-transparent"}`}>
// //                 <div className="flex gap-4">
// //                   <div className="p-2 rounded bg-indigo-100 text-indigo-600">{getAlertIcon(alert.type)}</div>
// //                   <div className="flex-1">
// //                     <h3 className="font-bold">{alert.title}</h3>
// //                     <p className="text-gray-600">{alert.message}</p>

// //                     {alert.type === "booking" && !alert.handled && (
// //                       <div className="flex gap-2 mt-2">
// //                         <button
// //                           onClick={() => handleBookingAction(alert.bookingId, "confirm", index)}
// //                           disabled={loading[alert.bookingId]}
// //                           className="px-3 py-1 bg-green-600 text-white rounded"
// //                         >
// //                           {loading[alert.bookingId] ? "Processing..." : "Accept"}
// //                         </button>
// //                         <button
// //                           onClick={() => handleBookingAction(alert.bookingId, "reject", index)}
// //                           disabled={loading[alert.bookingId]}
// //                           className="px-3 py-1 bg-red-600 text-white rounded"
// //                         >
// //                           {loading[alert.bookingId] ? "Processing..." : "Reject"}
// //                         </button>
// //                       </div>
// //                     )}

// //                     {alert.handled && <p className="text-sm text-indigo-600 mt-1">Booking already handled</p>}

// //                     <div className="flex justify-between text-xs text-gray-500 mt-2">
// //                       <span>{alert.date}</span>
// //                       {!alert.read && <button onClick={() => markAsRead(index)}>Mark as read</button>}
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Alerts;

// import React, { useState, useEffect } from "react";
// import { useLanguage } from "../context/LanguageContext";
// import { addAlert } from "../utils/alertHelper";

// function Alerts() {
//   const { t } = useLanguage();
//   const [alerts, setAlerts] = useState([]);
//   const [loading, setLoading] = useState({});
//   const farmerId = localStorage.getItem("farmerId");

//   // Load alerts from backend + local storage
//   const loadAlerts = async () => {
//     try {
//       const res = await fetch(`http://localhost:5000/api/notifications/${farmerId}`);
//       const backendAlerts = await res.json();

//       const formattedBackendAlerts = backendAlerts.map(n => ({
//         type: "booking",
//         title: "New Booking Request",
//         message: n.message,
//         bookingId: n.bookingId,
//         read: n.read,
//         handled: false,
//         date: new Date(n.createdAt).toLocaleString(),
//       }));

//       const localAlerts = JSON.parse(localStorage.getItem("alerts") || "[]");

//       setAlerts([...formattedBackendAlerts, ...localAlerts]);
//     } catch (err) {
//       console.error("Failed to load alerts:", err);
//     }
//   };

//   useEffect(() => {
//     if (!farmerId) return; // Prevent crash if farmerId missing
//     loadAlerts();
//   }, [farmerId]);

//   const markAsRead = async index => {
//     const updated = [...alerts];
//     updated[index].read = true;
//     setAlerts(updated);

//     // Update backend if it's a booking notification
//     const alert = updated[index];
//     if (alert.bookingId) {
//       await fetch(`http://localhost:5000/api/notifications/${farmerId}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ notificationId: alert.bookingId, read: true }),
//       });
//     }

//     localStorage.setItem("alerts", JSON.stringify(updated.filter(a => !a.bookingId)));
//   };

//   const markAllAsRead = () => {
//     const updated = alerts.map(a => ({ ...a, read: true }));
//     setAlerts(updated);
//     localStorage.setItem("alerts", JSON.stringify(updated.filter(a => !a.bookingId)));
//   };

//   const handleBookingAction = async (bookingId, action, index) => {
//     setLoading(prev => ({ ...prev, [bookingId]: true }));
//     try {
//       const res = await fetch(`http://localhost:5000/api/bookings/${bookingId}/farmer-confirm`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ action }),
//       });
//       const data = await res.json();

//       if (res.ok) {
//         addAlert(action === "confirm" ? "Booking Accepted" : "Booking Rejected", data.message);

//         const updatedAlerts = [...alerts];
//         updatedAlerts[index].handled = true;
//         updatedAlerts[index].read = true;
//         setAlerts(updatedAlerts);

//         setTimeout(loadAlerts, 500);
//       } else {
//         alert(data.message || "Failed to update booking");
//       }
//     } catch (err) {
//       console.error(err);
//     }
//     setLoading(prev => ({ ...prev, [bookingId]: false }));
//   };

//   const getAlertIcon = type => {
//     if (type === "booking") {
//       return (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
//         </svg>
//       );
//     }
//     return null;
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4">
//       <div className="max-w-4xl mx-auto">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold">{t("alertsTitle") ?? "Alerts"}</h1>
//           {alerts.length > 0 && (
//             <button onClick={markAllAsRead} className="px-4 py-2 bg-indigo-600 text-white rounded">
//               {t("markAllRead") ?? "Mark all as read"}
//             </button>
//           )}
//         </div>

//         {alerts.length === 0 ? (
//           <p className="text-center text-gray-500">{t("noAlerts") ?? "No alerts yet."}</p>
//         ) : (
//           <div className="space-y-4">
//             {alerts.map((alert, index) => (
//               <div key={index} className={`bg-white p-4 rounded shadow border-l-4 ${!alert.read ? "border-indigo-500" : "border-transparent"}`}>
//                 <div className="flex gap-4">
//                   <div className="p-2 rounded bg-indigo-100 text-indigo-600">{getAlertIcon(alert.type)}</div>
//                   <div className="flex-1">
//                     <h3 className="font-bold">{alert.title}</h3>
//                     <p className="text-gray-600">{alert.message}</p>

//                     {alert.type === "booking" && !alert.handled && (
//                       <div className="flex gap-2 mt-2">
//                         <button onClick={() => handleBookingAction(alert.bookingId, "confirm", index)} disabled={loading[alert.bookingId]} className="px-3 py-1 bg-green-600 text-white rounded">
//                           {loading[alert.bookingId] ? "Processing..." : "Accept"}
//                         </button>
//                         <button onClick={() => handleBookingAction(alert.bookingId, "reject", index)} disabled={loading[alert.bookingId]} className="px-3 py-1 bg-red-600 text-white rounded">
//                           {loading[alert.bookingId] ? "Processing..." : "Reject"}
//                         </button>
//                       </div>
//                     )}

//                     {alert.handled && <p className="text-sm text-indigo-600 mt-1">Booking already handled</p>}

//                     <div className="flex justify-between text-xs text-gray-500 mt-2">
//                       <span>{alert.date}</span>
//                       {!alert.read && <button onClick={() => markAsRead(index)}>Mark as read</button>}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Alerts;


import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { addAlert } from "../utils/alertHelper";
import API_URL from "../config/api";

function Alerts() {
  const { t } = useLanguage();
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState({});

  const farmerId = localStorage.getItem("farmerId");

  // Load backend + local alerts
  const loadAlerts = async () => {
    try {
      // Backend notifications
      const res = await fetch(`${API_URL}/api/notifications/${farmerId}`);
      const backendAlerts = await res.json();

      const formattedBackend = backendAlerts.map((n) => ({
        type: "booking",
        title: "New Booking Request",
        message: n.message,
        bookingId: n.bookingId || null,
        read: n.read || false,
        handled: false,
        date: new Date(n.createdAt).toLocaleString(),
      }));

      // Local alerts
      const localAlerts = JSON.parse(localStorage.getItem("alerts") || "[]");

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
    localStorage.setItem("alerts", JSON.stringify(updated.filter((a) => a.type !== "booking")));
  };

  const markAllAsRead = () => {
    const updated = alerts.map((a) => ({ ...a, read: true }));
    setAlerts(updated);
    localStorage.setItem("alerts", JSON.stringify(updated.filter((a) => a.type !== "booking")));
  };

  const handleBookingAction = async (bookingId, status, index) => {
    setLoading((prev) => ({ ...prev, [bookingId]: true }));

    try {
      const res = await fetch(`${API_URL}/api/bookings/${bookingId}/farmer-confirm`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: status }),
      });

      const data = await res.json();

      if (res.ok) {
        addAlert(
          status === "confirm" ? "Booking Accepted" : "Booking Rejected",
          `You have ${status === "confirm" ? "accepted" : "rejected"} the booking.`
        );

        const updatedAlerts = [...alerts];
        updatedAlerts[index].read = true;
        updatedAlerts[index].handled = true;
        setAlerts(updatedAlerts);

        setTimeout(loadAlerts, 500);
      } else {
        alert(data.message || "Failed to update booking");
      }
    } catch (err) {
      console.error(err);
    }

    setLoading((prev) => ({ ...prev, [bookingId]: false }));
  };

  const getAlertIcon = (type) => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">{t("alertsTitle") ?? "Alerts"}</h1>
          {alerts.length > 0 && (
            <button onClick={markAllAsRead} className="px-4 py-2 bg-indigo-600 text-white rounded">
              {t("markAllRead") ?? "Mark all as read"}
            </button>
          )}
        </div>

        {alerts.length === 0 ? (
          <p className="text-center text-gray-500">{t("noAlerts") ?? "No alerts yet."}</p>
        ) : (
          <div className="space-y-4">
            {alerts.map((alert, index) => (
              <div key={index} className={`bg-white p-4 rounded shadow border-l-4 ${!alert.read ? "border-indigo-500" : "border-gray-300"}`}>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded bg-indigo-100 text-indigo-600">{getAlertIcon(alert.type)}</div>
                  <div className="flex-1">
                    <h3 className="font-bold">{alert.title}</h3>
                    <p>{alert.message}</p>

                    {alert.type === "booking" && !alert.handled && (
                      <div className="flex gap-2 mt-2">
                        <button onClick={() => handleBookingAction(alert.bookingId, "confirm", index)}
                          disabled={loading[alert.bookingId]}
                          className="px-3 py-1 bg-green-600 text-white rounded">
                          {loading[alert.bookingId] ? "Processing..." : "Accept"}
                        </button>
                        <button onClick={() => handleBookingAction(alert.bookingId, "reject", index)}
                          disabled={loading[alert.bookingId]}
                          className="px-3 py-1 bg-red-600 text-white rounded">
                          {loading[alert.bookingId] ? "Processing..." : "Reject"}
                        </button>
                      </div>
                    )}

                    {alert.handled && <p className="mt-1 text-sm text-gray-600">Booking already handled</p>}

                    <div className="flex justify-between text-xs text-gray-400 mt-2">
                      <span>{alert.date}</span>
                      {!alert.read && <button onClick={() => markAsRead(index)}>Mark as read</button>}
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

export default Alerts;
