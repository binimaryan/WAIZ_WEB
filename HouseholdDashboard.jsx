import React from "react";
import Navbar from "./Navbar";
import MyRequests from "./MyRequests";  // Updated import

const HouseholdDashboard = () => {
  return (
    <div>
      <Navbar />
      <section style={{ padding: "30px" }}>
        <h2 className="section-title">Household Dashboard</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          <div className="card" style={{ width: "300px" }}>
            <h3>My Listings</h3>
            <p>View and manage your recyclable items ready for pickup or sale.</p>
          </div>
          <div className="card" style={{ width: "300px" }}>
            <h3>Nearby Junkshops</h3>
            <p>Find verified junkshops around Baguio and contact them directly.</p>
          </div>
          <div className="card" style={{ width: "300px" }}>
            <h3>Transactions</h3>
            <p>Track your sales, payments, and transaction history easily.</p>
          </div>
          <div className="card" style={{ width: "300px" }}>
            <h3>Profile Settings</h3>
            <p>Update your personal info, password, and notification preferences.</p>
          </div>
        </div>
      </section>
      <MyRequests />  {/* Add this to show requests */}
    </div>
  );
};

export default HouseholdDashboard;