import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import AssignmentCards from '../../components/assignmentCards/AssignmentCards'
import Sidebar from '../../components/sidebar/Sidebar'
// import Topbar from '../../components/topbar/Topbar'
import "./assignments.scss"


const Assignments = () => {
  const navigate = useNavigate()

  const [reqProfessor, serReqProfessor] = useState([])

  useEffect(() => {
  serReqProfessor(JSON.parse(localStorage.getItem('professor')))
}, [])
  
  return (
    <div>
        <Sidebar/>
        <div className="topbar">
            <h1>Teacher Assignments</h1>
            <span className='StudentName'>Welcome {reqProfessor.name}</span>
            <br />
            {/* <span className="CourseSemBranch">B.Tech. 4th Semester - ETE</span> */}
        </div>
        <div className="btn">
          <button onClick={() => { navigate('/newAssignment')}}> New Assignment +</button>
        </div>
        
        <div className="container">
        {/* <button> New Assignment +</button> */}
        
        <div className='flex'></div>
        <div className="container2">
          <div className="flexcol">

            {
              reqProfessor.assignment && reqProfessor.assignment.map(task => {
                console.log(task)
                return (
                  <AssignmentCards assignment={task} />
                )
              })
            }
           

          </div>
          {/* <div className="flexcol">
          <AssignmentCards />
          <AssignmentCards />
          <AssignmentCards />
          </div> */}
          
        </div>
        <div className='flex'></div>

      </div>
    </div>
  )
}

export default Assignments