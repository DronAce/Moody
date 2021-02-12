import React from 'react'
import './SidebarChat.css'
import {Avatar} from '@material-ui/core'
import db from "./firebase"
import { Link } from "react-router-dom";

function SidebarChat({ addNewChat, id, name }) {

    const createChat = () => {
        ///Change this whole thing to onSubmit search
        const roomName = prompt("please enter name for chat");

        if (roomName) {
            // do something
            db.collection("rooms").add({
                name: roomName,
            })
        }

    };

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar /* src={user.image} */ />
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    <p>Last Message</p>
                </div>
            </div>
        </Link>
    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add New Chat</h2>
        </div>
    )
}


export default SidebarChat

