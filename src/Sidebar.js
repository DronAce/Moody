import React from 'react';
import {Avatar, IconButton} from '@material-ui/core'
import {SearchOutlined} from '@material-ui/icons'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SidebarChat from './SidebarChat'

import './Sidebar.css'


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search" type="text" /> 
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat addNewChat/>
                <SidebarChat />
                <SidebarChat />

            </div>
        </div>

    )
}

export default Sidebar;