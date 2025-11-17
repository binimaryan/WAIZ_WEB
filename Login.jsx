import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import Navbar from "./Navbar";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div>
      <Navbar />
      <section style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}>
        <div className="card" style={{ width: "350px", textAlign: "center" }}>
          <h2 className="section-title">Login</h2>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
              required
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
              required
            />
            <button className="btn btn-green" type="submit">Login</button>
          </form>
          <p style={{ marginTop: "12px" }}>
            Don't have an account? <a href="/register" style={{ color: "#228B22", fontWeight: "600" }}>Sign Up</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;