import React, { useState } from 'react'
import './Chat.css'
import {Avatar, IconButton} from '@material-ui/core'
import {AttachFile, MoreVert, SearchOutlined} from '@material-ui/icons'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';



function Chat() {

    const [input, setInput] = useState("")
    const sendMessage = (e) => {
        e.preventDefault();
        console.log(input)
    }
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar /*src={user.image} */ />
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>

                </div>
            </div>
            <div className="chat__body">
                <p className={`chat__message ${true && "chat__reciever"}`}> 
                    <span className="chat__name">{/*username*/}Danny</span>
                    {/* chat.message */} Hello User Message Here
                    <span className="chat__timestamp">3:30pm</span>
                </p>

                <p className="chat__message"> 
                    <span className="chat__name">{/*username*/}Danny</span>
                    {/* chat.message */} Hello User Message Here
                    <span className="chat__timestamp">3:30pm</span>
                </p>
                    
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
           <form>
                <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text" 
                    placeholder="Type a Message"
                />
                <button type="submit" onClick={sendMessage}>Send</button>
           </form>
           <MicIcon />
           </div>
        </div>
    )
}

export default Chat
