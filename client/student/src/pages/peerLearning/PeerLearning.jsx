import React from 'react'
import "./peerLearning.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Conversation from '../../components/conversation/Conversation'
import Message from '../../components/message/Message'
import ChatOnline from '../../components/chatOnline/ChatOnline'
export default function PeerLearning() {
  return (
    <>
    <Sidebar />
    <div className='peerLearning'>
        <div className='chatMenu'>
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
        <div className='chatBox'>
            <div className="chatBoxWrapper">
                <div className="chatBoxTop">
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
                    <Message own={true}/>
                    <Message />
                    <Message />

                </div>
                <div className="chatBoxBottom">
                    <textarea className='chatMessageInput' placeholder='Write Something ..'></textarea>
                    <button className='chatSubmitButton'>Send</button>
                </div>
            </div>
        </div>
        <div className='chatOnline'>
            <div className="chatOnlineWrapper">
                <ChatOnline />
                <ChatOnline />
            </div>
        </div>
    </div>
    </>
  )
}
