import React from 'react'
import "./message.scss"

const Message = ({own}) => {
  return (
    <div className={own ? "message own" : "message"}>
        <div className="messageTop">
            <img 
            className='messageImg'
            src="https://th.bing.com/th/id/OIP.p-tCU_opnL7Co30gF4n9EwHaFq?pid=ImgDet&rs=1" 
            alt="" 
            />
            <p className='messageText' >Hello this is a message</p>
        </div>
        <div className="messageBottom">
            1 hour ago
        </div>
    </div>
  )
}

export default Message