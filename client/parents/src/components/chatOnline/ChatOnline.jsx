import React from 'react'
import "./chatOnline.scss"

function ChatOnline() {
  return (
    <div className='chatOnline'>
        <div className="chatOnlineFriend">
            <div className="chatOnlineImgContainer">
            <img className='chatOnlineImg' src="https://th.bing.com/th/id/OIP.p-tCU_opnL7Co30gF4n9EwHaFq?pid=ImgDet&rs=1" alt="" />
            </div>
            
            <div className="chatOnlineBadge">

            </div>
            <span className="chatOnlineName">
            John Doe
        </span>
        </div>
        

    </div>
  )
}

export default ChatOnline