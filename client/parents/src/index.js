import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import App from "./App";
import ParentState from "./context/parent/ParentState";
import StudentState from "./context/student/StudentState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ParentState>
      <StudentState>
        <App />
      </StudentState>
    </ParentState>
  </React.StrictMode>
);
