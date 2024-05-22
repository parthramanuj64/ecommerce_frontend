import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="h-screen w-screen">
      <Outlet />
    </div>
  );
}

export default App;
