import React, { useEffect, useState } from "react";
import API_URL from "../config/api";

export default function FarmerBookings() {
  const farmerId = localStorage.getItem("farmerId");
  const [bookings, setBookings] = useState([]);

  const fetchBookings = () => {
    if (!farmerId) return;
    fetch(`${API_URL}/api/bookings/farmer/${farmerId}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  };

  useEffect(() => {
    fetchBookings();
  }, [farmerId]);

  const handleAction = async (bookingId, action) => {
    const res = await fetch(`${API_URL}/api/bookings/${bookingId}/farmer-confirm`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action }),
    });
    const data = await res.json();
    alert(data.message || "Updated");
    fetchBookings();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Booking Requests</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        bookings.map((b) => (
          <div key={b._id} style={{ border: "1px solid #ddd", padding: 12, marginBottom: 10, borderRadius: 8 }}>
            <p><strong>Residue:</strong> {b.residueId?.cropName}</p>
            <p><strong>Quantity:</strong> {b.quantityBooked} kg</p>
            <p><strong>Industry:</strong> {b.industryId?.companyName}</p>
            <p><strong>Payment:</strong> {b.paymentMethod} — {b.paymentStatus}</p>
            <p><strong>Status:</strong> {b.status}</p>

            {(b.status === "Booked" || b.status === "Pending") && (
              <>
                <button onClick={() => handleAction(b._id, "confirm")} style={{ marginRight: 8 }}>Accept</button>
                <button onClick={() => handleAction(b._id, "reject")}>Reject</button>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
}
