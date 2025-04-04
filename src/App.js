import { Routes,Route } from "react-router-dom";
import Java from "./java";
import Sql from "./sql";
import React from "./react";
import Home from "./home";
function App() {
  return (
<>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/java" element={<Java/>} />
      <Route path="/sql" element={<Sql/>} />
      <Route path="/react" element={<React/>} />
    </Routes>
</>

  );
}

export default App;
