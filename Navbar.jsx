import React from "react";
import { useAuth } from "../AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav style={{
      backgroundColor: "#228B22",
      color: "white",
      padding: "14px 24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }}>
      <h1 style={{ fontSize: "20px", fontWeight: "600" }}>WAIZ</h1>
      <div>
        {!user ? (
          <button className="btn btn-gold" onClick={() => window.location.href="/"}>
            Login / Sign Up
          </button>
        ) : (
          <button className="btn btn-gold" onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;