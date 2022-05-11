import React, { useContext, useEffect, useState } from "react";
import professorContext from "../../context/professor/professorContext";
import "./notice.scss";
import { useNavigate } from "react-router-dom";

const Notice = () => {
  const navigate = useNavigate();

  const [allNotices, setAllNotices] = useState([]);

  const { fetchAllProfessor } = useContext(professorContext);

  useEffect(() => {
    const getAllPatient = async () => {
      const res = await fetchAllProfessor();
      if (res === "error") {
        navigate("/error");
      }
      let allProfessors = res.data;
      allProfessors = await allProfessors.filter(
        (prof) => prof.isHOI || prof.isHOD
      );
      const notices = [];
      await allProfessors.map((prof) => {
          Array.prototype.push.apply(notices, prof.notices)
      });
      setAllNotices(notices)
    };
    getAllPatient();
    
  }, []);
  

  return (
    <>
      {allNotices.map((notice) => {
        return (
          <div className="notice-box notice">
            <h4>
              <span className="noticeHeading">{notice ? notice.title : 'Notice Title'}</span>
            </h4>
            {/* <br /> */}
            <span className="noticeText"> {notice && notice.description}</span>
            <br />
            <span className="noticeBy">{notice && notice.by ? notice.by : ''}</span>_
            <span className="noticetime">{notice.date}</span>
          </div>
        );
      })}
    </>
  );
};

export default Notice;
