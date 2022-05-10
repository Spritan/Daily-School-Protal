import React from 'react'
import TestCards from '../../components/testCards/TestCards'
import Sidebar from '../../components/sidebar/Sidebar'
// import Topbar from '../../components/topbar/Topbar'
import "./classTest.scss"


const ClassTest = () => {
  return (
    <div>
        <Sidebar/>
        <div className="topbar">
            <h1>Student ClassTest</h1>
            <span className='StudentName'>Proyash Paban Sarma Borah</span>
            <br />
            <span className="CourseSemBranch">B.Tech. 4th Semester - ETE</span>
        </div>
        <button> New Test +</button>
        <div className="container">
        <div className='flex'></div>
        <div className="container2">
          <div className="flexcol">
            <TestCards />
            <TestCards />
            <TestCards />
            <TestCards />
          </div>
          <div className="flexcol">
          <TestCards />
          <TestCards />
          <TestCards />
          </div>
          
        </div>
        <div className='flex'></div>

      </div>
    </div>
  )
}

export default ClassTest