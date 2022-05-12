import React, { useEffect, useState } from "react";
import Message from "../message/Message";
import axios from 'axios'

const ChatBox = ({ conversationId }) => {

    const [text, setText] = useState('')
    const [reqProfessor, serReqProfessor] = useState([])

    useEffect(() => {
        const getAllMessages = async () => {
            const res = await axios.get(`http://localhost:8080/api/message/get/${conversationId}`)
        }
        getAllMessages()
    }, [])
    

    useEffect(() => {
        serReqProfessor(JSON.parse(localStorage.getItem('professor')))
    }, [])

    const handleSend = async() => {
        const res = await axios.post(`http://localhost:8080/api/message`, { conversationId : conversationId, sender: reqProfessor._id, text: text, date: new Date()})
    }

  return (
    <div className="chatBox">
      <div className="chatBoxWrapper">
        <div className="chatBoxTop">
          {

          }
          <Message />
          <Message own={true} />
          <Message />
          <Message own={true} />
          <Message />
          <Message own={true} />
          <Message />
          <Message own={true} />
          <Message />
          <Message own={true} />
          <Message />
          <Message own={true} />
          <Message />
          <Message />
        </div>

        <div className="chatBoxBottom">
          <textarea
            className="chatMessageInput"
            placeholder="Write Something .."
            onChange={(e) => { setText(e.target.value) }}
          ></textarea>
          <button className="chatSubmitButton" onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
