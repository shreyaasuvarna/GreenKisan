// // frontend/src/pages/BookResidue.jsx
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { addAlert } from "../utils/alertHelper";

// export default function BookResidue() {
//   const { id } = useParams(); // residueId
//   const navigate = useNavigate();

//   const [residue, setResidue] = useState(null);
//   const [quantity, setQuantity] = useState("");
//   const [paymentMethod, setPaymentMethod] = useState("COD");
//   const [industryId, setIndustryId] = useState(localStorage.getItem("industryId") || "");

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/residue/all`)
//       .then(res => res.json())
//       .then(data => {
//         const item = data.find(d => d._id === id);
//         setResidue(item || null);
//         if (item) setQuantity(Math.min(1, item.quantity));
//       });
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!industryId) {
//       alert("Please login as Industry to book");
//       return;
//     }
//     if (!quantity || quantity <= 0) {
//       alert("Enter a valid quantity");
//       return;
//     }
//     const totalPrice = Number(quantity) * 1; // placeholder price per kg = 1₹ (change as needed)
//     const payload = { residueId: id, industryId, quantityBooked: Number(quantity), totalPrice, paymentMethod };

//     const res = await fetch("http://localhost:5000/api/bookings/create", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload)
//     });
//     const data = await res.json();

//     // if (paymentMethod === "ONLINE") {
//     //   // data.order contains razorpay order
//     //   const { order, booking } = data;
//     //   const options = {
//     //     key: process.env.REACT_APP_RAZORPAY_KEY_ID || "rzp_test_xxx", // put test key or use Vite env VITE_RAZORPAY_KEY_ID
//     //     amount: order.amount,
//     //     currency: order.currency,
//     //     name: "Green Kisan",
//     //     description: "Residue purchase",
//     //     order_id: order.id,
//     //     handler: async function (resp) {
//     //       // verify on backend
//     //       const verifyRes = await fetch("http://localhost:5000/api/bookings/verify", {
//     //         method: "POST",
//     //         headers: { "Content-Type": "application/json" },
//     //         body: JSON.stringify({
//     //           razorpayOrderId: resp.razorpay_order_id,
//     //           razorpayPaymentId: resp.razorpay_payment_id,
//     //           razorpaySignature: resp.razorpay_signature,
//     //           bookingId: booking._id
//     //         })
//     //       });
//     //       const verifyData = await verifyRes.json();
//     //       if (verifyData.success) {
//     //         alert("Payment verified! Booking pending farmer confirmation.");
//     //         navigate("/industry-orders");
//     //       } else {
//     //         alert("Payment verification failed");
//     //       }
//     //     },
//     //     prefill: {
//     //       email: localStorage.getItem("industryEmail") || "",
//     //       contact: ""
//     //     }
//     //   };
//     //   const rzp = new window.Razorpay(options);
//     //   rzp.open();
//     // } else {
//       // COD
//       if (data.booking) {
//         alert("Booking placed (COD). Waiting for farmer confirmation.");
//         navigate("/industry-orders");
//       } else {
//         alert("Booking failed");
//       // }
//     }
//   };

//   if (!residue) return <div>Loading...</div>;

 

// const handleBooking = async () => {
//   const res = await axios.post("/api/bookings", {
//     residueId,
//     farmerId,
//     industryId,
//     quantity,
//   });

//   // notify farmer
//   addAlert(
//     "New Booking Request",
//     `An industry has requested to book your residue: ${residueId}`
//   );

//   alert("Booking request sent!");
// };


//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Book Residue — {residue.cropName}</h2>
//       <p><strong>Available:</strong> {residue.quantity} kg</p>
//       <form onSubmit={handleSubmit}>
//         <label>Quantity to book (kg)</label>
//         <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" max={residue.quantity} />

//         <label>Payment method</label>
//         <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
//           <option value="COD">Cash on Delivery</option>
//           <option value="ONLINE">Pay Online</option>
//         </select>

//         <button type="submit">Confirm Booking</button>
//       </form>
//     </div>
//   );
// }

// frontend/src/pages/BookResidue.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { addAlert } from "../utils/alertHelper";

export default function BookResidue() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [residue, setResidue] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [industryId, setIndustryId] = useState(localStorage.getItem("industryId") || "");

  useEffect(() => {
    fetch(`http://localhost:5000/api/residue/all`)
      .then(res => res.json())
      .then(data => {
        const item = data.find(d => d._id === id);
        setResidue(item || null);
        if (item) setQuantity(Math.min(1, item.quantity));
      });
  }, [id]);

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!industryId) {
      alert("Please login as Industry to book");
      return;
    }
    if (!quantity || quantity <= 0) {
      alert("Enter a valid quantity");
      return;
    }
    const totalPrice = Number(quantity) * 1;
    const payload = { residueId: id, industryId, quantityBooked: Number(quantity), totalPrice, paymentMethod };

    const res = await fetch("http://localhost:5000/api/bookings/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await res.json();

    if (data.booking) {
      alert("Booking placed (COD). Waiting for farmer confirmation.");
      navigate("/industry-orders");
    } else {
      alert("Booking failed");
    }
  };

  if (!residue) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-green-500 border-t-transparent"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading residue details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center text-green-700 hover:text-green-800 font-medium transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Listings
        </button>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-6">
            <h1 className="text-3xl font-bold text-white mb-2">Book Residue</h1>
            <p className="text-green-100 text-lg">{residue.cropName}</p>
          </div>

          {/* Content Section */}
          <div className="px-8 py-6">
            {/* Availability Badge */}
            <div className="mb-6 inline-flex items-center bg-green-100 rounded-full px-4 py-2">
              <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-green-800 font-semibold">
                Available: {residue.quantity} kg
              </span>
            </div>

            {/* Booking Form */}
            <div className="space-y-6">
              {/* Quantity Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Quantity to Book (kg)
                </label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  min="1"
                  max={residue.quantity}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all outline-none text-lg"
                  placeholder="Enter quantity"
                  required
                />
                <p className="mt-2 text-sm text-gray-500">
                  Maximum available: {residue.quantity} kg
                </p>
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Payment Method
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className={`relative flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    paymentMethod === "COD" 
                      ? "border-green-500 bg-green-50" 
                      : "border-gray-300 hover:border-gray-400"
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      value="COD"
                      checked={paymentMethod === "COD"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="sr-only"
                    />
                    <div className="text-center">
                      <svg className="w-8 h-8 mx-auto mb-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="font-medium text-gray-900">Cash on Delivery</span>
                    </div>
                    {paymentMethod === "COD" && (
                      <div className="absolute top-2 right-2">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </label>

                  <label className={`relative flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    paymentMethod === "ONLINE" 
                      ? "border-green-500 bg-green-50" 
                      : "border-gray-300 hover:border-gray-400"
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      value="ONLINE"
                      checked={paymentMethod === "ONLINE"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="sr-only"
                    />
                    <div className="text-center">
                      <svg className="w-8 h-8 mx-auto mb-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      <span className="font-medium text-gray-900">Pay Online</span>
                    </div>
                    {paymentMethod === "ONLINE" && (
                      <div className="absolute top-2 right-2">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              {/* Price Summary */}
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Price per kg</span>
                  <span className="font-semibold text-gray-900">₹1</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Quantity</span>
                  <span className="font-semibold text-gray-900">{quantity || 0} kg</span>
                </div>
                <div className="border-t border-gray-300 my-3"></div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total Amount</span>
                  <span className="text-2xl font-bold text-green-600">₹{(quantity || 0) * 1}</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 px-6 rounded-lg hover:from-green-700 hover:to-emerald-700 transform hover:scale-[1.02] transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Confirm Booking
              </button>

              {/* Info Text */}
              <p className="text-center text-sm text-gray-500">
                Your booking will be sent to the farmer for confirmation
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info Card */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">Booking Process</h3>
              <p className="text-sm text-blue-800">
                After confirming your booking, the farmer will review and approve it. You'll receive a notification once approved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
