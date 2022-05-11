import studentContext from "./studentContext";
import axios from "axios";

const StudentState = (props) => {
  const host = "http://localhost:8080/api";

  //  ------------------API calls----------------

  //  Get all student from a class
  const getStudentOfClass = async (courseName, deptName, semester) => {
    try {
      const res = await axios.post(`${host}/student/class`, {
        courseName,
        deptName,
        semester,
      });
      return res;
    } catch (error) {
      return "error";
    }
  };

  return (
    <studentContext.Provider value={{ getStudentOfClass }}>
      {props.children}
    </studentContext.Provider>
  );
};

export default StudentState;
