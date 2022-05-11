import { useContext, useEffect, useState } from "react";
import studentContext from "../../context/student/studentContext";

import "./mainbody.scss";

const Mainbody = () => {
  const { getStudentOfClass } = useContext(studentContext);

  const [reqProfessor, serReqProfessor] = useState([]);

  const [classOfStudent, setClassOfStudent] = useState([]);

  const [allCourses, setAllCourses] = useState([]);
  const [allDepts, setAllDepts] = useState([]);
  const [allSubjects, setAllSubjects] = useState([]);
  const [allSemesters, setallSemesters] = useState([]);

  const [date, setDate] = useState("");
  const [courseName, setCourseName] = useState("");
  const [deptName, setDeptName] = useState("");
  const [subject, setSubject] = useState("");
  const [semester, setSemester] = useState();

  useEffect(() => {
    serReqProfessor(JSON.parse(localStorage.getItem("professor")));
  }, []);

  useEffect(() => {
    let courses = [];
    let departments = [];
    let subjects = [];
    let semesters = [];

    reqProfessor.length !== 0 &&
      reqProfessor.class.map((c) => {
        courses.push(c.courseName);
        departments.push(c.deptName);
        subjects.push(...c.subjects);
        semesters.push(c.semester);
      });

    setAllCourses([...new Set(courses)]);
    setAllDepts([...new Set(departments)]);
    setAllSubjects([...new Set(subjects)]);
    setallSemesters([...new Set(semesters)]);
  }, [reqProfessor]);
  

  const handleSearch = async (e) => {
    e.preventDefault();
    const res = await getStudentOfClass(courseName, deptName, semester);
    setClassOfStudent(res.data);
  };

  return (
    <>
      <div className="main">
        <div className="flex1"></div>
        <div className="mainbody">
          <h1>Attendance Report</h1>
          <form className="formsSection" onSubmit={handleSearch}>
            <div>
              Date: &ensp;
              <input type="date" onChange={(e) => setDate(e.target.value)} />
            </div>

            <div>
              <label htmlFor="Course">Course:</label>
              &ensp;
              <select
                name="Course"
                id="Course"
                onChange={(e) =>
                  e.target.value !== "" && setCourseName(e.target.value)
                }
              >
                <option value="">Select Cource</option>
                {/* <option value="">B.Tech</option> */}
                {allCourses.length !== 0 &&
                  allCourses.map((d) => {
                    return (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    );
                  })}
              </select>
            </div>

            <div>
              <label htmlFor="departments">Departments:</label>
              &ensp;
              <select
                id="departments"
                onChange={(e) =>
                  e.target.value !== "" && setDeptName(e.target.value)
                }
              >
                <option value=""> Select Department </option>
                {/* <option value="">B.Tech</option> */}
                {allDepts.length !== 0 &&
                  allDepts.map((c) => {
                    return (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    );
                  })}
              </select>
            </div>

            <div>
              <label htmlFor="subjects">Subjects:</label>
              &ensp;
              <select
                id="subjects"
                onChange={(e) =>
                  e.target.value !== "" && setSubject(e.target.value)
                }
              >
                <option value="">Select Subject</option>
                {allSubjects.length !== 0 &&
                  allSubjects.map((c) => {
                    return (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    );
                  })}
              </select>
            </div>

            <div>
              <label htmlFor="Semester">Semester:</label>
              &ensp;
              <select
                name="Semester"
                id="Semester"
                onChange={(e) =>
                  e.target.value !== "" && setSemester(e.target.value)
                }
              >
                <option value="">Select Semester</option>
                {allSemesters.length !== 0 &&
                  allSemesters.map((s) => {
                    return (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    );
                  })}

                {/* <option value="audi">Audi</option> */}
              </select>
            </div>

            <button
              style={{
                width: "80px",
                backgroundColor: "lightblue",
                cursor: "pointer",
              }}
            >
              {" "}
              Search
            </button>
          </form>
          <br />
          <div className="formTable">
            <table>
              <tr>
                <th>Name</th>
                <th>Roll No.</th>
                <th>Attendence</th>
              </tr>

              {classOfStudent.map((student) => {
                return (
                  <tr>
                    <td>{student.name}</td>
                    <td>{student.rollNo}</td>
                    <td>
                      <input type="checkbox" id="switch" />
                    </td>
                  </tr>
                );
              })}

            </table>

            <button> Submit </button>
          </div>
        </div>
        <div className="flex3"></div>
      </div>
    </>
  );
};

export default Mainbody;
