import React, { useContext, useEffect, useRef, useState } from "react";
import "./peerLearning.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Conversation from "../../components/conversation/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import studentContext from "../../context/student/studentContext";
import conversationContext from "../../context/conversation/conversationContext";
// import { io } from "socket.io-client";

export default function PeerLearning() {

  // const { getStudentOfClass } = useContext(studentContext);
  // const { newConversation, allConversations } = useContext(conversationContext)

  // const [reqProfessor, serReqProfessor] = useState([]);
  // const [convesations, setConvesations] = useState([]);
  // // const [first, setfirst] = useState(second)

  // useEffect(() => {
  //   serReqProfessor(JSON.parse(localStorage.getItem("professor")));
  // }, []);

  // useEffect(() => {
  //   const fetchAllConversations = async () => {
  //     const res = await allConversations()
  //     setConvesations(res.data)
  //   }
  //   fetchAllConversations()
  // }, []);

  // const createConversation = async (members, classDetails, teacherId) => {
  //   const res = await newConversation(members, classDetails, teacherId)
  // }

  // useEffect(() => {
  //   convesations.filter(conversation => conversation.teacherId === reqProfessor._id)
  //   if(!convesations || convesations.length===0){
  //     reqProfessor.map(prof => {
  //       // prof.class 
  //     })
  //   }
  // }, [convesations]);

  // useEffect(() => {
  //   // reqProfessor.class && reqProfessor.class.map(c => {
  //   // })
  // }, []);

  return (
    <>
      <Sidebar />
      <div className="peerLearning">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search" className="chatMenuInput" />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {
              <div className="chatBoxTop">
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
            }
            <div className="chatBoxBottom">
              <textarea
                className="chatMessageInput"
                placeholder="Write Something .."
              ></textarea>
              <button className="chatSubmitButton">Send</button>
            </div>
          </div>
        </div>
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
