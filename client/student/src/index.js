import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import App from "./App";
import ConversationState from "./context/conversation/ConversationState";
import ProfessorState from "./context/professor/ProfessorState";
import StudentState from "./context/student/StudentState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProfessorState>
      <StudentState>
        <ConversationState>
        <App />
        </ConversationState>
      </StudentState>
    </ProfessorState>
  </React.StrictMode>
);
