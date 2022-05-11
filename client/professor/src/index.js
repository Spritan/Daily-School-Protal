import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ProfessorState from "./context/professor/ProfessorState";
import StudentState from "./context/student/StudentState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProfessorState>
      <StudentState>
        <App />
      </StudentState>
    </ProfessorState>
  </React.StrictMode>
);
