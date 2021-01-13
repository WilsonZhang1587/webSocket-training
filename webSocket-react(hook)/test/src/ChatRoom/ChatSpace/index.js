import React, { useEffect, useState } from "react";
import moment from "moment";

function scrollWindow() {
  let h = document.querySelector(".chats");
  h.scrollTo(0, h.scrollHeight);
}

function ChatSpace({ ws, history }) {
  useEffect(() => {
    scrollWindow();
  });

  return (
    <div
      className="chats"
      style={{
        width: "85%",
        height: "770px",
        position: "fixed",
        bottom: "120px",
        padding: "0px 25px",
        overflowY: "scroll"
      }}
    >
      <style>
        {`
        .chats::-webkit-scrollbar{
          display: none;
        }
        `}
      </style>
      {history &&
        history.map((item, index) => (
          <div key={index}>
            <div className="group" style={{ display: "flex" }}>
              <div className="name">{item.name}</div>
              <div
                className="time"
                style={{
                  fontSize: "14px",
                  color: "#ccc",
                  marginLeft: "10px"
                }}
              >
                {moment(item.time).fromNow()}
              </div>
            </div>
            <div
              className="msg"
              style={{ marginLeft: "15px", backgroundColor: "#ccc" }}
            >
              {item.msg}
            </div>
          </div>
        ))}
    </div>
  );
}

export default ChatSpace;
