import React from "react";

const materials = [
  { name: "Plastic Bottles", price: "₱12–₱18/kg" },
  { name: "Aluminum Cans", price: "₱35–₱45/kg" },
  { name: "Cartons", price: "₱5–₱7/kg" },
  { name: "Glass Bottles", price: "₱1–₱2/pc" },
];

const RateList = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h3 style={{ color: "#228B22" }}>Recyclable Material Rates</h3>
      {materials.map((m) => (
        <div
          key={m.name}
          style={{
            background: "white",
            padding: "12px",
            borderRadius: "8px",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "space-between",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <strong>{m.name}</strong>
          <span>{m.price}</span>
        </div>
      ))}
    </div>
  );
};

export default RateList;