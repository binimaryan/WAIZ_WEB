import React from "react";

const demoPosts = [
  { id: 1, user: "Aira", text: "Selling 2kg plastic bottles!", time: "2h ago" },
  { id: 2, user: "Roy", text: "Recycling tip: Wash cans before selling!", time: "5h ago" },
  { id: 3, user: "Jen Junkshop", text: "We buy cartons ₱6/kg!", time: "1 day ago" },
];

const HomeFeed = () => {
  return (
    <div style={{ padding: "20px" }}>
      {demoPosts.map((post) => (
        <div
          key={post.id}
          style={{
            background: "white",
            padding: "16px",
            borderRadius: "8px",
            marginBottom: "12px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <h4 style={{ margin: 0 }}>{post.user}</h4>
          <p style={{ margin: "4px 0" }}>{post.text}</p>
          <small style={{ color: "gray" }}>{post.time}</small>
        </div>
      ))}
    </div>
  );
};

export default HomeFeed;