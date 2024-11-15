import React from "react";
import "./Weather.css"
import Weather from "./Weather.jsx"
function App() {
const style = {
  backgroundImage:
    "url('https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D')",
  height: "100vh",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  
};

  return (
    <div>
      <Weather></Weather>
    <h1>hello</h1>
      
    </div>
  );
}

export default App
