import React from 'react'
import { Link } from 'react-router-dom'
import "./assignmentCards.scss"

const AssignmentCards = ({assignment}) => {
  return (
    <div className='AssignmentCards'>
        <div class="container3">
        <h4>
          <span className='Subject' >
            {assignment.subject}
          </span>
          </h4>
        <hr />
        <br />
        <h5> <span className='User topic' >Assignment</span></h5>
        <br />
        
        <h5>Last date: <span className='User lastDate' >{assignment.date}</span></h5>
        <br />
        <button>
        <a href={assignment.file} style={{textDecoration: 'none'}}> Questions</a>
        </button>
        <button> Submit</button>
      </div>
    </div>
  )
}

export default AssignmentCards