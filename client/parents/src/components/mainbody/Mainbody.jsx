import * as React from 'react';
import AttendenceCards from '../attendenceCards/AttendenceCards';

import "./mainbody.scss";

const Mainbody = () => {

  return (
    <>
      <div className="container">
        <div className='flex'></div>
        <div className="container2">
          <div className="flexcol">
            <AttendenceCards />
            <AttendenceCards />
            <AttendenceCards />
          </div>
          <div className="flexcol">
            <AttendenceCards />
            <AttendenceCards />
            <AttendenceCards />
          </div>
          
        </div>
        <div className='flex'></div>

      </div>
      }
    </>
  )
}

export default Mainbody