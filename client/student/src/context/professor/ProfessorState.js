import professorContext from "./professorContext";
import axios from "axios";

const ProfessorState = (props) => {
  const host = "http://localhost:8080/api";

  //  ------------Api Calls ------------

  //  Get All Professor

  const fetchAllProfessor = async () => {
    try {
      const res = axios.get(`${host}/professor/all`);
      return res;
    } catch (error) {
      return "error";
    }
  };

  //  Get a professor

  const findProfessor = async (professorId) => {
    try {
      const res = axios.get(`${host}/professor/find/${professorId}`);
      return res;
    } catch (error) {
      return "error";
    }
  };

  return (
    <professorContext.Provider value={{ fetchAllProfessor, findProfessor }}>
      {props.children}
    </professorContext.Provider>
  );
};

export default ProfessorState;
