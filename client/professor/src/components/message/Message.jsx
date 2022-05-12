import React, { useEffect, useState } from 'react'
import "./message.scss"

const Message = ({message}) => {
  const [reqProfessor, serReqProfessor] = useState([]);

  useEffect(() => {
    serReqProfessor(JSON.parse(localStorage.getItem("professor")));
  }, []);

  return (
    <div className={message.sender===reqProfessor._id ? "message own" : "message"}>
        <div className="messageTop">
            <img 
            className='messageImg'
            src={reqProfessor.profilePic} 
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