import React from 'react'
import AssignmentCards from '../../components/assignmentCards/AssignmentCards'
import Sidebar from '../../components/sidebar/Sidebar'
// import Topbar from '../../components/topbar/Topbar'


const Assignments = () => {
  return (
    <div>
        <Sidebar/>
        <div className="topbar">
            <h1>Student Assignments</h1>
            <span className='StudentName'>Proyash Paban Sarma Borah</span>
            <br />
            <span className="CourseSemBranch">B.Tech. 4th Semester - ETE</span>
        </div>
        <div className="container">
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