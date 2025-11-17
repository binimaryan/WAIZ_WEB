import React from "react";

const sampleRequests = [
  { id: 1, item: "Plastic Bottles", status: "Pending", date: "Jan 10" },
  { id: 2, item: "Cartons", status: "Completed", date: "Jan 6" },
];

const MyRequests = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h3 style={{ color: "#228B22" }}>My Collection Requests</h3>
      {sampleRequests.map((r) => (
        <div
          key={r.id}
          style={{
            background: "white",
            padding: "12px",
            borderRadius: "8px",
            marginBottom: "10px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <strong>{r.item}</strong>
          <p>Status: {r.status}</p>
          <small>Date: {r.date}</small>
        </div>
      ))}
    </div>
  );
};

export default MyRequests;