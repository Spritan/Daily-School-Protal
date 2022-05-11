import { useEffect, useState } from 'react'
import "./Topbar.scss";

const Topbar = () => {

  const [reqProfessor, serReqProfessor] = useState([])

  useEffect(() => {
      serReqProfessor(JSON.parse(localStorage.getItem('professor')))
  }, [])

  return (
    <>
        <div className="topbar">
            <h1>Attendance Report</h1>
            <span className='StudentName'>Welcome {reqProfessor.name}</span>
            <br />
            {/* <span className="CourseSemBranch">B.Tech. 4th Semester - ETE</span> */}
        </div>
    </>
  )
}

export default Topbar