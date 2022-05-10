import React, { useEffect, useRef, useState } from "react";
import "./peerLearning.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Conversation from "../../components/conversation/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import { io } from "socket.io-client";

export default function PeerLearning() {
  const scrollRef = useRef()

  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
              <div className="chatBoxTop" ref={scrollRef}>
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
