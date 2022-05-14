import { useEffect, useState } from "react";
import AttendenceCards from '../attendenceCards/AttendenceCards';

import "./mainbody.scss";

const Mainbody = () => {

  const [reqStudent, setReqStudent] = useState([])

  useEffect(() => {
      setReqStudent(JSON.parse(localStorage.getItem('student')))
  }, [])

  useEffect(() => {
    // For Chemistry
      
  }, [])
  

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
          
        </div>
        <div className='flex'></div>

      </div>
    </>
  )
}

export default Mainbody