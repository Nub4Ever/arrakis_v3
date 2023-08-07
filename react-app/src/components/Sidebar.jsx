import React from 'react';
import "../styles/Sidebar.css"
import "../App.css";
import {SidebarObj} from "./SidebarObj"

function Sidebar() {
  return (

    <div className='Sidebar'>
        <div className = "SidebarList">
        <ul className = "SidebarList">
        {SidebarObj.map((val,key) => {
            return (
                <div className ='SidebarList.row'>
                 <li
                key = {key}
                className='row'
                id = {window.location.pathname === val.link ? "active" : ""}
                onClick={()=> {window.location.pathname = val.link}}>

                <div id='icon'>
                    {val.icon}
                </div>
                <div id ='title'>
                    {val.title}
                </div>
                </li>
                </div>
            )
        })}
        </ul>
        </div>

        </div>
  );
}


export default Sidebar
