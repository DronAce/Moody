import React from 'react'
import './SidebarChat.css'
import {Avatar} from '@material-ui/core'

function SidebarChat({addNewChat}) {

    const createChat = () => {
        const roomName = prompt("please enter name for chat");

        if (roomName) {
            // do something
        }

    };

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar /* src={user.image} */ />
            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>Last Message</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add New Chat</h2>
        </div>
    )
}

export default SidebarChat

