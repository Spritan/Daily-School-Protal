import React, { useState } from "react";
import "./newAssignment.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
const NewAssignment = () => {

    const navigate = useNavigate()
    
    const [course, setCourse] = useState('')
    const [deptName, setDeptname] = useState('')
    const [semester, setSemester] = useState('')
    const [subject, setSubject] = useState('')
    const [date, setDate] = useState('')
    const [file, setFile] = useState()

  return (
    <div>
      <Sidebar />
      <div className="Assignment-form">
        <form>
          <h1>Assignment</h1>
          <div className="content">
            <div className="input-field">
              <input type="text" placeholder="Course" onChange={(e) => setCourse(e.target.value)} />
            </div>
            <div className="input-field">
              <input type="text" placeholder="Department Name" onChange={(e) => setDeptname(e.target.value)}  />
            </div>
            <div className="input-field">
              <input type="text" placeholder="Semester" onChange={(e) => setSemester(e.target.value)}/>
            </div>
            <div className="input-field">
              <input type="text" placeholder="Subject" onChange={(e) => setSubject(e.target.value)} />
            </div>
            <div className="input-field">
              <input type="date" placeholder="Date and time"  onChange={(e) => setDate(e.target.value)} />
            </div>
            {/* <div className="input-field">
                            <input type="time" placeholder="" autocomplete="nope" />
                        </div> */}
            {/* <div className="input-field">
                            <input type="time" placeholder="" autocomplete="nope" />
                        </div> */}
            {/* <div className="input-field">
                            <input type="text" placeholder="info." autocomplete="nope" />
                        </div> */}
            {/* <a href="#" className="link">Forgot Your Password?</a> */}
          </div>
          <div className="action">
            {/* <inpu>Upload Questions</inpu> */}
            <button>
            <label htmlFor="question">Upload Question</label>

            </button>
            <input type="file" id="question" style={{display: 'none'}} />
            <button onClick={() => navigate('/')}>Publish</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewAssignment;
