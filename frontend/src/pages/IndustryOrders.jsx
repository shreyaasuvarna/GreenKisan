// // frontend/src/pages/IndustryOrders.jsx
// import React, { useEffect, useState } from "react";

// export default function IndustryOrders() {
//   const industryId = localStorage.getItem("industryId");
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     if (!industryId) return;
//     fetch(`http://localhost:5000/api/bookings/industry/${industryId}`)
//       .then(res => res.json())
//       .then(data => setOrders(data));
//   }, [industryId]);

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>My Bookings</h2>
//       {orders.length === 0 ? <p>No orders</p> : orders.map(o => (
//         <div key={o._id} style={{ border: "1px solid #ddd", padding: 12, marginBottom: 10 }}>
//           <p><strong>Residue:</strong> {o.residueId?.cropName}</p>
//           <p><strong>Quantity:</strong> {o.quantityBooked} kg</p>
//           <p><strong>Total:</strong> ₹{o.totalPrice}</p>
//           <p><strong>Payment:</strong> {o.paymentMethod} — {o.paymentStatus}</p>
//           <p><strong>Status:</strong> {o.status}</p>
//         </div>
//       ))}
//     </div>
//   );
// }


// frontend/src/pages/IndustryOrders.jsx
import React, { useEffect, useState } from "react";
import API_URL from "../config/api";

export default function IndustryOrders() {
  const industryId = localStorage.getItem("industryId");
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!industryId) return;
    fetch(`${API_URL}/api/bookings/industry/${industryId}`)
      .then(res => res.json())
      .then(data => setOrders(data));
  }, [industryId]);

  const getStatusColor = (status) => {
    switch(status?.toLowerCase()) {
      case 'confirmed':
      case 'approved':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'completed':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'cancelled':
      case 'rejected':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPaymentStatusColor = (status) => {
    switch(status?.toLowerCase()) {
      case 'paid':
      case 'success':
        return 'text-green-600';
      case 'pending':
        return 'text-yellow-600';
      case 'failed':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Bookings</h1>
          <p className="text-gray-600">Track and manage all your residue orders</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Total Orders</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{orders.length}</p>
              </div>
              <div className="bg-green-100 rounded-full p-3">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Pending</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">
                  {orders.filter(o => o.status?.toLowerCase() === 'pending').length}
                </p>
              </div>
              <div className="bg-blue-100 rounded-full p-3">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-emerald-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Total Spent</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">
                  ₹{orders.reduce((sum, o) => sum + (o.totalPrice || 0), 0)}
                </p>
              </div>
              <div className="bg-emerald-100 rounded-full p-3">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Orders List */}
        {orders.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="max-w-md mx-auto">
              <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No Orders Yet</h3>
              <p className="text-gray-600 mb-6">
                You haven't placed any orders yet. Start browsing available residues to make your first booking!
              </p>
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all shadow-md">
                Browse Residues
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map(o => (
              <div key={o._id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    {/* Left Section - Product Info */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <div className="bg-green-100 rounded-lg p-3 flex-shrink-0">
                          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {o.residueId?.cropName || 'N/A'}
                          </h3>
                          <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                            <div className="flex items-center">
                              <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                              </svg>
                              <span className="font-medium">{o.quantityBooked} kg</span>
                            </div>
                            <span className="text-gray-300">•</span>
                            <div className="flex items-center">
                              <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="font-semibold text-gray-900">₹{o.totalPrice}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Section - Status & Payment */}
                    <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
                      {/* Order Status Badge */}
                      <div className={`px-4 py-2 rounded-lg border text-sm font-semibold text-center ${getStatusColor(o.status)}`}>
                        {o.status || 'Unknown'}
                      </div>

                      {/* Payment Info */}
                      <div className="text-sm">
                        <div className="flex items-center justify-between sm:justify-end lg:justify-between gap-2">
                          <span className="text-gray-600">Payment:</span>
                          <span className="font-semibold text-gray-900">{o.paymentMethod}</span>
                        </div>
                        <div className="flex items-center justify-between sm:justify-end lg:justify-between gap-2 mt-1">
                          <span className="text-gray-600">Status:</span>
                          <span className={`font-semibold ${getPaymentStatusColor(o.paymentStatus)}`}>
                            {o.paymentStatus || 'Pending'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Order ID */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500">
                      Order ID: <span className="font-mono text-gray-700">{o._id}</span>
                    </p>
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