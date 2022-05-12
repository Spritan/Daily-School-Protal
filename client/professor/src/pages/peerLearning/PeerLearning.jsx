import React, { useContext, useEffect, useRef, useState } from "react";
import "./peerLearning.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Conversation from "../../components/conversation/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import studentContext from "../../context/student/studentContext";
import conversationContext from "../../context/conversation/conversationContext";
import ChatBox from "../../components/chatBox/ChatBox";
import axios from 'axios'
// import { io } from "socket.io-client";

export default function PeerLearning() {
  const { allConversations } = useContext(conversationContext);

  const [reqConversation, setReqConversation] = useState([]);
  const [reqProfessor, serReqProfessor] = useState([]);
  const [conversationId, setConversationId] = useState('627c0f6ca3e8e2d17cd2b56d')
  const [text, setText] = useState('')

  const [newMessage, setNewMessage] = useState('')
  const [allMessages, setAllMessages] = useState([])


  useEffect(() => {
    serReqProfessor(JSON.parse(localStorage.getItem("professor")));
  }, []);

  useEffect(() => {
    const fetchReqConversation = async () => {
      const res = await allConversations();
      res.data.filter((convo) => convo.teacherId === reqProfessor._id);
      setReqConversation(res.data);
    };
    fetchReqConversation();
  }, []);


  useEffect(() => {
    const getAllMessages = async () => {
        const res = await axios.get(`http://localhost:8080/api/message/get/${conversationId}`)
        // console.log(res.data)
        setAllMessages(res.data)
    }
    getAllMessages()
}, [newMessage, reqProfessor])

const handleSend = async() => {
  console.log(conversationId)
  const res = await axios.post(`http://localhost:8080/api/message`, { conversationId : conversationId, sender: reqProfessor._id, text: text, date: new Date()})
  setNewMessage(res.data)
}
const scrollRef=useRef()
useEffect(()=>{
  scrollRef.current?.scrollIntoView({ behavior: "smooth"});
},[allMessages]);

  return (
    <>
      <Sidebar />
      <div className="peerLearning">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search" className="chatMenuInput" />
            {reqConversation.map((convo) => {
              return <Conversation teacherId={convo.teacherId} onClick={() => {
                setConversationId(convo._id)
              }} />;
            })}
          </div>
        </div>
      {  
       <div className="chatBox">
       <div className="chatBoxWrapper">
         <div className="chatBoxTop">
           {
             allMessages.map( message => {
              // console.log(message)
              return(
                <div ref={scrollRef}>
                  <Message key={message._id} message={message} />
                </div>
              )
             })
           }
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
      }
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline />
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
}
