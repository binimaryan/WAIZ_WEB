import React from 'react';
import Navbar from './Navbar';
import JarvishChat from './JarvishChat';  // Add this import
import { useAuth } from '../AuthContext';

const Home = () => {
  const { user } = useAuth();

  return (
    <div>
      <Navbar />
      {/* HERO */}
      <section style={{
        padding: "50px 20px",
        textAlign: "center",
        backgroundColor: "white"
      }}>
        <h2 className="section-title">Welcome to WAIZ</h2>
        <p style={{ fontSize: "18px", maxWidth: "700px", margin: "0 auto" }}>
          Find verified junkshops, sell recyclables securely, and help build a cleaner,
          greener Baguio — all in one platform.
        </p>
        <img 
          src="/vite.svg"
          alt="WAIZ Logo"
          style={{ width: "120px", marginTop: "20px" }}
        />
      </section>

      {/* WHY WAIZ */}
      <section style={{ padding: "40px" }}>
        <h2 className="section-title">Why WAIZ?</h2>
        <div style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px"
        }}>
          <div className="card" style={{ width: "300px" }}>
            <h3>For Households</h3>
            <p>Find verified junkshops nearby and get paid fairly with zero hassle.</p>
          </div>
          <div className="card" style={{ width: "300px" }}>
            <h3>For Junkshops</h3>
            <p>Reach more sellers, reduce travel time, and grow your recycling network.</p>
          </div>
          <div className="card" style={{ width: "300px" }}>
            <h3>Sustainability</h3>
            <p>Support eco-friendly practices that help protect Baguio’s environment.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "40px", textAlign: "center" }}>
        <h2 className="section-title">What Users Say</h2>
        <div className="card" style={{ maxWidth: "700px", margin: "0 auto" }}>
          <p style={{ fontStyle: "italic" }}>
            "As a student, WAIZ helps me sell cans without worrying about scams."
          </p>
          <p>- Jazyllyne Aira Luis</p>
          <br/>
          <p style={{ fontStyle: "italic" }}>
            "More customers mean better business for my junkshop."
          </p>
          <p>- Jennifer Cañiezo</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        backgroundColor: "#228B22",
        color: "white",
        padding: "20px",
        textAlign: "center",
        marginTop: "30px"
      }}>
        <p>&copy; 2025 WAIZ. Capstone Project.</p>
      </footer>

      <JarvishChat />  {/* Add this to show the chatbot */}
    </div>
  );
};

export default Home;