import React, { useContext, useEffect, useRef, useState } from "react";
import "./peerLearning.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Conversation from "../../components/conversation/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import studentContext from "../../context/student/studentContext";
import conversationContext from "../../context/conversation/conversationContext";
import ChatBox from "../../components/chatBox/ChatBox";
// import { io } from "socket.io-client";

export default function PeerLearning() {
  const { allConversations } = useContext(conversationContext);

  const [reqConversation, setReqConversation] = useState([]);
  const [reqProfessor, serReqProfessor] = useState([]);
  const [conversationId, setConversationId] = useState(null)

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
       <ChatBox conversationId={conversationId} />
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
