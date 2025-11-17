import React from "react";
import Navbar from "./Navbar";

const JunkshopDashboard = () => {
  return (
    <div>
      <Navbar />

      <section style={{ padding: "30px" }}>
        <h2 className="section-title">Junkshop Dashboard</h2>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          <div className="card" style={{ width: "300px" }}>
            <h3>Incoming Requests</h3>
            <p>Check household requests and respond to pick-up or buy orders.</p>
          </div>

          <div className="card" style={{ width: "300px" }}>
            <h3>Manage Inventory</h3>
            <p>Keep track of available recyclables and pricing easily.</p>
          </div>

          <div className="card" style={{ width: "300px" }}>
            <h3>Transactions</h3>
            <p>Monitor sales, payments, and transaction history efficiently.</p>
          </div>

          <div className="card" style={{ width: "300px" }}>
            <h3>Profile Settings</h3>
            <p>Update your shop info, contact details, and notification preferences.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JunkshopDashboard;