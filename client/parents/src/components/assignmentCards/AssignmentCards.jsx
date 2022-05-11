import React from 'react'
import "./assignmentCards.scss"

const AssignmentCards = () => {
  return (
    <div className='AssignmentCards'>
        <div class="container3">
        <h4>
          <span className='Subject' >
            Subject Name
          </span>
          </h4>
        <hr />
        <br />
        <h5>Topic: <span className='User topic' >Assignment</span></h5>
        <br />
        
        <h5>Last date: <span className='User lastDate' >12/05/2022</span></h5>
        <br />
        <button> Questions</button>
        <button> Submit</button>
      </div>
    </div>
  )
}

export default AssignmentCards