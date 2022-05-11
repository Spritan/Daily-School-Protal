import React from 'react'
import "../testCards/testCards.scss"

const TestCards = () => {
  return (
    <div className='TestCards'>
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
        
        <h5>Exam date: <span className='User lastDate' >12/05/2022</span></h5>
        <br />
        <h5>Time Remaining: <span className='User lastDate' >00:01:05</span></h5>
        <br />
        <button> Questions</button>
        <button> Submit</button>
      </div>
    </div>
  )
}

export default TestCards