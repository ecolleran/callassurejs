import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Parse from "parse";

const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if a user is already logged in
    const user = Parse.User.current();
    if (user) {
      // Redirect to user-home if logged in
      navigate("/user-home");
    }
  }, [navigate]);
  
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9", color: "#333" }}>
      <header style={{ backgroundColor: "#007BFF", color: "#fff", padding: "20px 10%", textAlign: "center" }}>
        <h1 style={{ margin: 0, fontSize: "2.5rem" }}>Welcome to CallAssure</h1>
        <p style={{ margin: "5px 0 0", fontSize: "1.2rem" }}>Peace of Mind for Families and Loved Ones</p>
      </header>

      <section style={sectionStyle}>
        <h2 style={headingStyle}>The Problem</h2>
        <p>Elderly individuals often struggle to stay connected in today’s fast-paced, technology-driven world. 
          Families want peace of mind, knowing their loved ones are safe and cared for.</p>
      </section>

      <section style={sectionStyle}>
        <h2 style={headingStyle}>Our Solution</h2>
        <p>CallAssure ensures regular check-ins, timely updates, and support tailored to the needs of elderly individuals and their families. 
          Our digital system provides a reliable, automated service designed to foster peace of mind.</p>
      </section>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", margin: "20px 0" }}>
        <Link to="/register" style={linkStyle}>
          <button style={buttonStyle}>Register</button>
        </Link>
        <p>or</p>
        <Link to="/login" style={linkStyle}>
          <button style={buttonStyle}>Login</button>
        </Link>
      </div>

      <section style={sectionStyle}>
        <h2 style={headingStyle}>The Inspiration</h2>
        <p>CallAssure was inspired by my grandma who lives on Cape Cod in Chatham. 
          Since her town is small and has a high percentage of elderly residents, the Chatham Police Department created a "reassurance program." 
          They wait for participants to call them each morning, then manually call residents or visit their homes if they receive no response. 
          Unfortunately, this model doesn't scale well to any decently sized city with a busy police or EMS force. 
          It is time consuming and costly to have a phone operator working all morning. And so, CallAssure was born!</p>
      </section>

      <section style={sectionStyle}>
        <h2 style={headingStyle}>How it Works</h2>
        <p>Each day users check-in via App, text message or phone call to certify they are okay. 
          This can be done any time of day. If a user fails to check in by their decided time, they will receive a phone call, text or App notification asking them to check in. 
          After a certain amount of time or number of attempted contacts, a set of loved ones will be notified. 
          If loved ones are not able to get in contact with the user, then emergency dispatchers can be sent to the user's home for a wellness check.</p>
      </section>

      <section style={sectionStyle}>
        <h2 style={headingStyle}>About Us</h2>
        <p>Created by William, Emily and Joe Colleran, 
          CallAssure leverages cutting-edge technology and compassionate care to help families stay connected and worry-free.</p>
      </section>

      <footer style={{ backgroundColor: "#333", color: "#fff", textAlign: "center", padding: "10px 0", marginTop: "20px" }}>
        <p>&copy; 2024 CallAssure. All rights reserved.</p>
      </footer>
    </div>
  );
};

const sectionStyle = {
  padding: "20px 10%",
  margin: "20px 0",
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
};

const headingStyle = {
  fontSize: "1.8rem",
  marginBottom: "10px",
};

const buttonStyle = {
  backgroundColor: "#007BFF",
  color: "white",
  border: "none",
  padding: "10px 20px",
  fontSize: "1rem",
  borderRadius: "5px",
  cursor: "pointer",
};

const linkStyle = {
  textDecoration: "none",
};


export default Main;
