import React from "react";
import Forum from "./Forum";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      <header style={{ background: "#6a1b9a", color: "white", padding: "20px" }}>
        <h1>Meraki</h1>
        <p>Anonymous support platform for teenagers</p>
      </header>

      <main style={{ margin: "20px" }}>
        <h2>Community Forum</h2>
        <Forum />
      </main>
    </div>
  );
}

export default App;