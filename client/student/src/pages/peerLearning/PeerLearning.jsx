import { useContext, useEffect, useState, useRef } from "react";
import "./peerLearning.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Conversation from "../../components/conversation/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import conversationContext from "../../context/conversation/conversationContext";
import axios from "axios";

export default function PeerLearning() {
  const { allConversations } = useContext(conversationContext);
  const { setReqConversations: conversations } =
    useContext(conversationContext);

    const scrollRef = useRef()

  const [reqStudent, setReqStudent] = useState([]);
  const [reqConversations, setReqConversations] = useState();
  const [conversationId, setConversationId] = useState(
    "627c0f6ca3e8e2d17cd2b56d"
  );
  const [text, setText] = useState("");

  const [newMessage, setNewMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);

  useEffect(() => {
    setReqStudent(JSON.parse(localStorage.getItem("student")));
  }, []);

  useEffect(() => {
    const fetchReqConversation = async () => {
      const res = await allConversations();
      res.data.filter((convo) => convo.members.includes(reqStudent._id));
      setReqConversations(res.data);
    };
    fetchReqConversation();
  }, []);

  useEffect(() => {
    const getAllMessages = async () => {
      const res = await axios.get(
        `http://localhost:8080/api/message/get/${conversationId}`
      );
      // console.log(res.data)
      setAllMessages(res.data);
      console.log(res.data);
    };
    getAllMessages();
  }, [newMessage, reqStudent]);

  const handleSend = async () => {
    console.log(conversationId);
    const res = await axios.post(`http://localhost:8080/api/message`, {
      conversationId: conversationId,
      sender: reqStudent._id,
      text: text,
      date: new Date(),
    });
    setNewMessage(res.data);
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [allMessages]);

  return (
    <>
      <Sidebar />
      <div className="peerLearning">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search" className="chatMenuInput" />
            {reqConversations &&
              reqConversations.map((conv) => {
                return <Conversation key={conv._id} conversation={conv} />;
              })}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              {allMessages.map((message) => {
                // console.log(message)
                return (
                    <div ref={scrollRef}>
                        <Message key={message._id} message={message} />;
                    </div>
                )
              })}
              {/* <Message />
                    <Message own={true}/>
                    <Message />
                    <Message own={true}/>
                    <Message />
                    <Message own={true}/>
                    <Message />
                    <Message own={true}/>
                    <Message />
                    <Message own={true}/>
                    <Message />
                    <Message own={true}/>
                    <Message />
                    <Message /> */}
            </div>
            <div className="chatBoxBottom">
              <textarea
                className="chatMessageInput"
                placeholder="Write Something .."
                onChange={(e) => setText(e.target.value)}
              ></textarea>
              <button className="chatSubmitButton" onClick={handleSend}>
                Send
              </button>
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
