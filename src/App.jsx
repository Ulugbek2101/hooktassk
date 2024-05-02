import React, { useState } from "react";
import "./App.css"

function App() {
  const [count, setcount] = useState(10)
  return (
    <div class="round">
     <div class="header_circle">
      <h1>{count}°C</h1>
     </div>
     <div class="footer">
      <div class="footer_circle"><h4>+</h4></div>
      <div class="footer_circle"><h4>-</h4></div>
     </div>
    </div>
  );
}

export default App;
