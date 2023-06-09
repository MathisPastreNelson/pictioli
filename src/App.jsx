import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Global from "./pages/Global";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/pictioli" element={<Global />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
