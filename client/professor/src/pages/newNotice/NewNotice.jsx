import React, { useContext, useEffect, useState } from "react";
import "./newNotice.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import professorContext from "../../context/professor/professorContext";
const NewNotice = () => {
  const navigate = useNavigate();
  const { updateProfessorNotice, findProfessor } = useContext(professorContext);

  const { professorId } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [by, setBy] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let notice = {
      title: title,
      description: description,
      date: new Date(),
      by: by,
    };
    const res = await findProfessor(professorId);
    let notices = res.data.notices;
    await notices.push(notice);

    console.log(notices)

    await updateProfessorNotice(professorId, notices);

    localStorage.removeItem("professor");
    navigate("/login");
  };

  return (
    <div>
      <Sidebar />
      <div className="notice-form">
        <form onSubmit={handleSubmit}>
          <h1>Notice</h1>
          <div className="content">
            <div className="input-field">
              <input
                type="text"
                placeholder="Heading"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="Body"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="Announchment by."
                onChange={(e) => setBy(e.target.value)}
              />
            </div>
            {/* <a href="#" className="link">Forgot Your Password?</a> */}
          </div>
          <div className="action">
            {/* <button>Register</button> */}
            <button>Publish</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewNotice;
