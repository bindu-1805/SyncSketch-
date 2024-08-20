import React, { useRef, useState } from "react";
import Chat from "./Chat";

const Sidebar = ({ users, user, socket }) => {
  const sideBarRef = useRef(null);
  const [openedChatTab, setOpenedChatTab]= useState(false);
  const openSideBar = () => {
    sideBarRef.current.style.left = 0;
  };
  const closeSideBar = () => {
    sideBarRef.current.style.left = -100 + "%";
  };

  

  return (
    <>
      <button
        className="btn btn-dark "
        onClick={openSideBar}
        style={{ position: "absolute", top: "5%", left: "5%"
                }}
      >
        Users
      </button>
      <button 
            type="button" 
            className="btn btn-dark"
            style={{
                display: "block",
                position: "absolute",
                top: "5%",
                left: "10%"
            }}
            onClick={()=>setOpenedChatTab(true)}
            >
                Chats
            </button>
      
      <div
        className="position-fixed pt-2 h-100 bg-dark"
        ref={sideBarRef}
        style={{
          width: "150px",
          left: "-100%",
          transition: "0.3s linear",
          zIndex: "9999",
        }}
      >
        <button
          className="btn btn-block border-0 form-control rounded-0 btn-light"
          onClick={closeSideBar}
        >
          Close
        </button>
        
        
        
        <div className="w-100 mt-5">
          {users.map((usr, index) => (
            <p key={index} className="text-white text-center py-2">
              {usr.username}
              {usr.id === socket.id && " - (You)"}
            </p>
          ))}
        </div>
      </div>
      {openedChatTab && (
                    <Chat setOpenedChatTab={setOpenedChatTab} socket={socket} />
                )}
      
    </>
  );
};

export default Sidebar;
