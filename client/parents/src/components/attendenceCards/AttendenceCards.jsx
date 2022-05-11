import React from 'react'
import "./attendenceCards.scss"

const AttendenceCards = () => {
  return (
    <div class="attendenceCards">
      <div class="container3">
        <h4>
          <span className='Subject' >
            Subject Name
          </span>
          </h4>
        <hr />
        <br />
        <h5>Total Class : <span className='User totClass' >1000</span></h5>
        <br />
        <h5>Attended Class: <span className='User attClass' >1000</span></h5>
      </div>
    </div>
  )
}

export default AttendenceCards