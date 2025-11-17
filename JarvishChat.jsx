import React, { useState } from "react";

const JarvishChat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! I am Jarvish. How can I help you?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages([...messages, { from: "user", text: input }]);
    setInput("");

    // simple bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Thanks! I will assist you shortly." },
      ]);
    }, 600);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#228B22",
          color: "white",
          padding: "14px 18px",
          borderRadius: "50%",
          border: "none",
          fontSize: "20px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          cursor: "pointer",
        }}
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            width: "300px",
            background: "white",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        >
          <div style={{ background: "#228B22", color: "white", padding: "10px" }}>
            <strong>Jarvish AI Chatbot</strong>
          </div>

          <div
            style={{
              height: "260px",
              overflowY: "auto",
              padding: "10px",
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  textAlign: m.from === "user" ? "right" : "left",
                  marginBottom: "8px",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    background: m.from === "user" ? "#FFD700" : "#eee",
                    padding: "6px 10px",
                    borderRadius: "6px",
                  }}
                >
                  {m.text}
                </span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex" }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                flex: 1,
                padding: "10px",
                border: "none",
                outline: "none",
              }}
              placeholder="Ask Jarvish..."
            />
            <button
              onClick={sendMessage}
              style={{
                background: "#FFD700",
                border: "none",
                padding: "10px 14px",
                cursor: "pointer",
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default JarvishChat;