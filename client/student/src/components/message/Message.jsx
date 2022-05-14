import { useEffect, useState } from "react";
import "./message.scss"

const Message = ({message}) => {
  const [reqStudent, setReqStudent] = useState([])

    useEffect(() => {
        setReqStudent(JSON.parse(localStorage.getItem('student')))
    }, [])

  return (
    <div className={message.sender===reqStudent._id ? "message own" : "message"}>
    <div className="messageTop">
        <img 
        className='messageImg'
        src={reqStudent.profilePic} 
        alt="" 
        />
        <p className='messageText' >{message.text}</p>
    </div>
    <div className="messageBottom">
        {message.date}
    </div>
</div>
  )
}

export default Message