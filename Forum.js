import React, { useState } from "react";

function Forum() {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");

  const addPost = () => {
    if (text.trim()) {
      setPosts([{ id: Date.now(), content: text }, ...posts]);
      setText("");
    }
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Share your thoughts or problems..."
        style={{ width: "80%", height: "80px", marginBottom: "10px" }}
      />
      <br />
      <button onClick={addPost} style={{ padding: "10px", background: "#6a1b9a", color: "white", border: "none" }}>
        Post
      </button>

      <div style={{ marginTop: "20px", textAlign: "left", maxWidth: "600px", margin: "20px auto" }}>
        {posts.map((post) => (
          <div key={post.id} style={{ background: "#f3e5f5", padding: "10px", marginBottom: "10px", borderRadius: "5px" }}>
            {post.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forum;