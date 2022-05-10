import React from 'react'
import AssignmentCards from '../../components/assignmentCards/AssignmentCards'
import Sidebar from '../../components/sidebar/Sidebar'
// import Topbar from '../../components/topbar/Topbar'
import "./assignments.scss"


const Assignments = () => {
  return (
    <div>
        <Sidebar/>
        <div className="topbar">
            <h1>Teacher Assignments</h1>
            <span className='StudentName'>Proyash Paban Sarma Borah</span>
            <br />
            <span className="CourseSemBranch">B.Tech. 4th Semester - ETE</span>
        </div>
        <div className="btn">
          <button> New Assignment +</button>
        </div>
        
        <div className="container">
        {/* <button> New Assignment +</button> */}
        
        <div className='flex'></div>
        <div className="container2">
          <div className="flexcol">
            <AssignmentCards />
            <AssignmentCards />
            <AssignmentCards />
            <AssignmentCards />
          </div>
          <div className="flexcol">
          <AssignmentCards />
          <AssignmentCards />
          <AssignmentCards />
          </div>
          
        </div>
        <div className='flex'></div>

      </div>
    </div>
  )
}

export default Assignments