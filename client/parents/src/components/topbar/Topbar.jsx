import React from 'react'
import "./Topbar.scss";

const Topbar = () => {
  return (
    <>
        <div className="topbar">
            <h1>Student Attendance Report</h1>
            <span className='StudentName'>Proyash Paban Sarma Borah</span>
            <br />
            <span className="CourseSemBranch">B.Tech. 4th Semester - ETE</span>
        </div>
    </>
  )
}

export default Topbar