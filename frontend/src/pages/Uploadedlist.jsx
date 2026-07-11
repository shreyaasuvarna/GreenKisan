// import React, { useEffect, useState } from "react";
// import { useLanguage } from "../context/LanguageContext"; // added for translations

// export default function Uploadedlist() {
//   const { t } = useLanguage(); // added for translations

//   const farmerId = localStorage.getItem("farmerId");
//   const [residues, setResidues] = useState([]);
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/residue/farmer/${farmerId}`)
//       .then(res => res.json())
//       .then(data => setResidues(data));

//     fetch(`http://localhost:5000/api/notifications/${farmerId}`)
//       .then(res => res.json())
//       .then(data => setNotifications(data));
//   }, []);

//   const deleteResidue = async (id) => {
//     if (!window.confirm(t("confirmDelete") ?? "Delete this residue?")) return;

//     await fetch(`http://localhost:5000/api/residue/${id}`, { method: "DELETE" });
//     setResidues(residues.filter(r => r._id !== id));
//   };

//   return (
//     <div className="dashboard">
//       <h1>{t("farmerDashboardTitle") ?? "Farmer Dashboard"}</h1>

//       <h2>{t("yourUploadedResidues") ?? "Your Uploaded Residues"}</h2>
//       {residues.length === 0 ? <p>{t("noResiduesUploaded") ?? "No residues uploaded yet."}</p> : null}

//       <div className="residue-list">
//         {residues.map((r) => (
//           <div key={r._id} className="residue-card">
//             <h3>{r.cropName}</h3>
//             <p>{t("typeLabel") ?? "Type:"} {r.residueType}</p>
//             <p>{t("quantityLabel") ?? "Quantity:"} {r.quantity} kg</p>
//             <button onClick={() => deleteResidue(r._id)}>{t("delete") ?? "Delete"}</button>
//           </div>
//         ))}
//       </div>

//       <h2>{t("notificationsTitle") ?? "Notifications"}</h2>
//       <ul>
//         {notifications.map((n) => (
//           <li key={n._id}>{n.message}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }


// // // import React, { useEffect, useState } from "react";

// // // export default function Uploadedlist({ token }) {
// // //   const [residues, setResidues] = useState([]);
// // //   const [notifications, setNotifications] = useState([]);

// // //   // Fetch residues
// // //   const loadResidues = async () => {
// // //     try {
// // //       const res = await fetch("http://localhost:5000/api/residue/all", {
// // //         headers: { Authorization: `Bearer ${token}` },
// // //       });
// // //       const data = await res.json();
// // //       setResidues(data);
// // //     } catch (err) {
// // //       console.error("Failed to fetch residues:", err);
// // //     }
// // //   };

// // //   // Fetch notifications
// // //   const loadNotifications = async () => {
// // //     try {
// // //       const res = await fetch("http://localhost:5000/api/notifications/me", {
// // //         headers: { Authorization: `Bearer ${token}` },
// // //       });
// // //       const data = await res.json();
// // //       setNotifications(data);
// // //     } catch (err) {
// // //       console.error("Failed to fetch notifications:", err);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     loadResidues();
// // //     loadNotifications();
// // //   }, [token]);

// // //   const deleteResidue = async (id) => {
// // //     if (!window.confirm("Delete this residue?")) return;

// // //     try {
// // //       await fetch(`http://localhost:5000/api/residue/${id}`, {
// // //         method: "DELETE",
// // //         headers: { Authorization: `Bearer ${token}` },
// // //       });
// // //       setResidues(residues.filter((r) => r._id !== id));
// // //     } catch (err) {
// // //       console.error("Failed to delete residue:", err);
// // //     }
// // //   };

// // //   return (
// // //     <div className="dashboard">
// // //       <h1>Farmer Dashboard</h1>

// // //       <h2>Your Uploaded Residues</h2>
// // //       {residues.length === 0 && <p>No residues uploaded yet.</p>}

// // //       <div className="residue-list">
// // //         {residues.map((r) => (
// // //           <div key={r._id} className="residue-card">
// // //             <h3>{r.cropName}</h3>
// // //             <p>Type: {r.residueType}</p>
// // //             <p>Quantity: {r.quantity} kg</p>
// // //             <button onClick={() => deleteResidue(r._id)}>Delete</button>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       <h2>Notifications</h2>
// // //       <ul>
// // //         {notifications.map((n) => (
// // //           <li key={n._id}>{n.message}</li>
// // //         ))}
// // //       </ul>
// // //     </div>
// // //   );
// // // }
// // import React, { useEffect, useState } from "react";

// // export default function Uploadedlist({ token }) {
// //   const [residues, setResidues] = useState([]);
// //   const [notifications, setNotifications] = useState([]);

// //   useEffect(() => {
// //     // Fetch farmer's residues
// //     const fetchResidues = async () => {
// //       try {
// //         const res = await fetch("http://localhost:5000/api/residue/all", {
// //           headers: { Authorization: `Bearer ${token}` },
// //         });
// //         const data = await res.json();
// //         setResidues(data);
// //       } catch (err) {
// //         console.error("Failed to fetch residues:", err);
// //       }
// //     };

// //     // Fetch notifications (your notifications route should return logged-in user's notifications)
// //     const fetchNotifications = async () => {
// //       try {
// //         const res = await fetch("http://localhost:5000/api/notifications/me", {
// //           headers: { Authorization: `Bearer ${token}` },
// //         });
// //         const data = await res.json();
// //         setNotifications(data);
// //       } catch (err) {
// //         console.error("Failed to fetch notifications:", err);
// //       }
// //     };

// //     fetchResidues();
// //     fetchNotifications();
// //   }, [token]);

// //   const deleteResidue = async (id) => {
// //     if (!window.confirm("Delete this residue?")) return;
// //     try {
// //       await fetch(`http://localhost:5000/api/residue/${id}`, {
// //         method: "DELETE",
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
// //       setResidues(residues.filter((r) => r._id !== id));
// //     } catch (err) {
// //       console.error("Failed to delete residue:", err);
// //     }
// //   };

// //   return (
// //     <div className="dashboard">
// //       <h1>Farmer Dashboard</h1>

// //       <h2>Your Uploaded Residues</h2>
// //       {residues.length === 0 && <p>No residues uploaded yet.</p>}

// //       <div className="residue-list">
// //         {residues.map((r) => (
// //           <div key={r._id} className="residue-card">
// //             <h3>{r.cropName}</h3>
// //             <p>Type: {r.residueType}</p>
// //             <p>Quantity: {r.quantity} kg</p>
// //             <button onClick={() => deleteResidue(r._id)}>Delete</button>
// //           </div>
// //         ))}
// //       </div>

// //       <h2>Notifications</h2>
// //       <ul>
// //         {notifications.map((n) => (
// //           <li key={n._id}>{n.message}</li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }


import React, { useState, useEffect } from 'react';
import { Trash2, Edit2, Eye, Bell, Package, Leaf, MapPin, Calendar, ArrowLeft, X, Save } from 'lucide-react';

const Uploadedlist = () => {
  const [language, setLanguage] = useState('en');
  const [residues, setResidues] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [viewingId, setViewingId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [loading, setLoading] = useState(true);

  const translations = {
    en: {
      title: 'My Uploads',
      back: 'Back to Dashboard',
      noUploads: 'No residues uploaded yet',
      uploadNow: 'Upload Your First Residue',
      notifications: 'Recent Notifications',
      noNotifications: 'No new notifications',
      confirmDelete: 'Are you sure you want to delete this residue?',
      deleted: 'Residue deleted successfully',
      updated: 'Residue updated successfully',
      edit: 'Edit',
      delete: 'Delete',
      view: 'View',
      save: 'Save Changes',
      cancel: 'Cancel',
      cropName: 'Crop Name',
      residueType: 'Residue Type',
      quantity: 'Quantity',
      location: 'Location',
      uploadedOn: 'Uploaded on',
      kg: 'kg',
      details: 'Details',
      close: 'Close',
      price: 'Price',
      perKg: 'per kg',
      editResidue: 'Edit Residue'
    },
    kn: {
      title: 'ನನ್ನ ಅಪ್‌ಲೋಡ್‌ಗಳು',
      back: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹಿಂತಿರುಗಿ',
      noUploads: 'ಇನ್ನೂ ಯಾವುದೇ ಅವಶೇಷಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಲಾಗಿಲ್ಲ',
      uploadNow: 'ನಿಮ್ಮ ಮೊದಲ ಅವಶೇಷವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ',
      notifications: 'ಇತ್ತೀಚಿನ ಅಧಿಸೂಚನೆಗಳು',
      noNotifications: 'ಹೊಸ ಅಧಿಸೂಚನೆಗಳಿಲ್ಲ',
      confirmDelete: 'ನೀವು ಖಚಿತವಾಗಿ ಈ ಅವಶೇಷವನ್ನು ಅಳಿಸಲು ಬಯಸುವಿರಾ?',
      deleted: 'ಅವಶೇಷವನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಅಳಿಸಲಾಗಿದೆ',
      updated: 'ಅವಶೇಷವನ್ನು ಯಶಸ್ವಿಯಾಗಿ ನವೀಕರಿಸಲಾಗಿದೆ',
      edit: 'ಸಂಪಾದಿಸಿ',
      delete: 'ಅಳಿಸಿ',
      view: 'ನೋಡಿ',
      save: 'ಉಳಿಸಿ',
      cancel: 'ರದ್ದುಮಾಡಿ',
      cropName: 'ಬೆಳೆ ಹೆಸರು',
      residueType: 'ಅವಶೇಷ ಪ್ರಕಾರ',
      quantity: 'ಪ್ರಮಾಣ',
      location: 'ಸ್ಥಳ',
      uploadedOn: 'ಅಪ್‌ಲೋಡ್ ದಿನಾಂಕ',
      kg: 'ಕೆಜಿ',
      details: 'ವಿವರಗಳು',
      close: 'ಮುಚ್ಚಿ',
      price: 'ಬೆಲೆ',
      perKg: 'ಪ್ರತಿ ಕೆಜಿ',
      editResidue: 'ಅವಶೇಷ ಸಂಪಾದಿಸಿ'
    }
  };

  const t = (key) => translations[language][key] || key;

//   useEffect(() => {
//   const farmerId = localStorage.getItem("farmerId");
//   if (!farmerId) return;

//   const fetchData = async () => {
//     try {
//       const res = await fetch(`http://localhost:5000/api/residue/farmer/${farmerId}`);
//       const data = await res.json();

//       setResidues(data.residues || []);
//       setNotifications(data.notifications || []);
//     } catch (err) {
//       console.error("Error fetching residues:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchData();
// }, []);

  useEffect(() => {
    const fetchResidues = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch("http://localhost:5000/api/residue/all", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (res.ok) {
          setResidues(Array.isArray(data) ? data : []);
        } else {
          console.error("Error:", data);
        }
      } catch (err) {
        console.error("Error fetching residues:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchResidues();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm(t('confirmDelete'))) return;
    setResidues(residues.filter(r => r._id !== id));
    alert(t('deleted'));
  };

  const handleEdit = (residue) => {
    setEditingId(residue._id);
    setEditForm({
      cropName: residue.cropName,
      residueType: residue.residueType,
      quantity: residue.quantity,
      location: residue.location,
      price: residue.price
    });
  };

  const handleSave = async (id) => {
    setResidues(residues.map(r => 
      r._id === id ? { ...r, ...editForm } : r
    ));
    setEditingId(null);
    alert(t('updated'));
  };

  const handleView = (id) => {
    setViewingId(id);
  };

  const viewingResidue = residues.find(r => r._id === viewingId);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-green-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">{t('back')}</span>
            </button>
            <h1 className="text-2xl font-bold text-gray-800">{t('title')}</h1>
          </div>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-green-500"
          >
            <option value="en">English</option>
            <option value="kn">ಕನ್ನಡ</option>
          </select>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Uploads */}
          <div className="lg:col-span-2 space-y-6">
            {residues.length === 0 ? (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center border border-gray-100">
                <Package size={64} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('noUploads')}</h3>
                <p className="text-gray-600 mb-6">Start by uploading your first crop residue</p>
                <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition shadow-md font-medium">
                  {t('uploadNow')}
                </button>
              </div>
            ) : (
              residues.map((residue) => (
                <div key={residue._id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition">
                  {editingId === residue._id ? (
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">{t('editResidue')}</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t('cropName')}
                          </label>
                          <input
                            type="text"
                            value={editForm.cropName}
                            onChange={(e) => setEditForm({...editForm, cropName: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 bg-white text-gray-700"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t('residueType')}
                          </label>
                          <input
                            type="text"
                            value={editForm.residueType}
                            onChange={(e) => setEditForm({...editForm, residueType: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 bg-white text-gray-700"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              {t('quantity')} ({t('kg')})
                            </label>
                            <input
                              type="number"
                              value={editForm.quantity}
                              onChange={(e) => setEditForm({...editForm, quantity: e.target.value})}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 bg-white text-gray-700"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              {t('price')} (₹/{t('kg')})
                            </label>
                            <input
                              type="number"
                              value={editForm.price}
                              onChange={(e) => setEditForm({...editForm, price: e.target.value})}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 bg-white text-gray-700"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t('location')}
                          </label>
                          <input
                            type="text"
                            value={editForm.location}
                            onChange={(e) => setEditForm({...editForm, location: e.target.value})}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 bg-white text-gray-700"
                          />
                        </div>
                        <div className="flex gap-3 pt-2">
                          <button
                            onClick={() => handleSave(residue._id)}
                            className="flex-1 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition flex items-center justify-center space-x-2 font-medium"
                          >
                            <Save size={18} />
                            <span>{t('save')}</span>
                          </button>
                          <button
                            onClick={() => setEditingId(null)}
                            className="flex-1 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition font-medium"
                          >
                            {t('cancel')}
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3">
                        <img
                          src={residue.images[0]}
                          alt={residue.cropName}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-800">{residue.cropName}</h3>
                            <div className="flex items-center text-sm text-gray-500 mt-1">
                              <Calendar size={14} className="mr-1" />
                              <span>{t('uploadedOn')} {residue.uploadDate}</span>
                            </div>
                          </div>
                          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                            ₹{residue.price}/{t('kg')}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center text-gray-700">
                            <Leaf size={18} className="mr-2 text-green-600" />
                            <span className="text-sm">{residue.residueType}</span>
                          </div>
                          <div className="flex items-center text-gray-700">
                            <Package size={18} className="mr-2 text-blue-600" />
                            <span className="text-sm font-semibold">{residue.quantity} {t('kg')}</span>
                          </div>
                          <div className="flex items-center text-gray-700 col-span-2">
                            <MapPin size={18} className="mr-2 text-red-600" />
                            <span className="text-sm">{residue.location}</span>
                          </div>
                        </div>

                        <div className="flex gap-2 pt-4 border-t border-gray-200">
                          <button
                            onClick={() => handleView(residue._id)}
                            className="flex-1 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition flex items-center justify-center space-x-1 text-sm font-medium"
                          >
                            <Eye size={16} />
                            <span>{t('view')}</span>
                          </button>
                          <button
                            onClick={() => handleEdit(residue)}
                            className="flex-1 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition flex items-center justify-center space-x-1 text-sm font-medium"
                          >
                            <Edit2 size={16} />
                            <span>{t('edit')}</span>
                          </button>
                          <button
                            onClick={() => handleDelete(residue._id)}
                            className="flex-1 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition flex items-center justify-center space-x-1 text-sm font-medium"
                          >
                            <Trash2 size={16} />
                            <span>{t('delete')}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Sidebar - Notifications */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Bell size={24} className="mr-2 text-orange-500" />
                {t('notifications')}
              </h2>

              {notifications.length === 0 ? (
                <p className="text-gray-600 text-sm">{t('noNotifications')}</p>
              ) : (
                <div className="space-y-3">
                  {notifications.map((notification) => (
                    <div
                      key={notification._id}
                      className={`p-3 rounded-lg border ${
                        notification.read 
                          ? 'bg-gray-50 border-gray-200' 
                          : 'bg-blue-50 border-blue-200'
                      }`}
                    >
                      <p className="text-sm text-gray-800 font-medium mb-1">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-500">{notification.date}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* View Details Modal */}
      {viewingResidue && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="relative">
              <img
                src={viewingResidue.images[0]}
                alt={viewingResidue.cropName}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setViewingId(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 shadow-lg transition"
              >
                <X size={24} className="text-gray-700" />
              </button>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">{viewingResidue.cropName}</h2>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <p className="text-sm text-gray-600 mb-1">{t('residueType')}</p>
                  <p className="text-lg font-semibold text-gray-800">{viewingResidue.residueType}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <p className="text-sm text-gray-600 mb-1">{t('quantity')}</p>
                  <p className="text-lg font-semibold text-gray-800">{viewingResidue.quantity} {t('kg')}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                  <p className="text-sm text-gray-600 mb-1">{t('price')}</p>
                  <p className="text-lg font-semibold text-gray-800">₹{viewingResidue.price} {t('perKg')}</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                  <p className="text-sm text-gray-600 mb-1">{t('location')}</p>
                  <p className="text-lg font-semibold text-gray-800">{viewingResidue.location}</p>
                </div>
              </div>

              <div className="border-t pt-4 border-gray-200">
                <p className="text-sm text-gray-600 mb-1">{t('uploadedOn')}</p>
                <p className="text-lg font-semibold text-gray-800">{viewingResidue.uploadDate}</p>
              </div>

              <button
                onClick={() => setViewingId(null)}
                className="w-full mt-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition font-medium"
              >
                {t('close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Uploadedlist;