import React, { useState, useEffect, useRef } from "react";
import webSocket from "socket.io-client";
import moment from "moment";

import Menu from "./Menu";
import ChatRoom from "./ChatRoom";

// function usePrevious(value) {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = value;
//   });
//   return ref.current;
// }

function App() {
  const [ws, setWs] = useState(null);
  const [room, setRoom] = useState(null);
  const [message, setMessage] = useState(null);
  // const prevAmount = usePrevious({ room });
  const [history, setHistory] = useState(null);

  useEffect(() => {
    if (ws) {
      //連線成功在 console 中打印訊息
      console.log("success connect!");
      //設定監聽
      ws.on("getmessage", message => {
        setMessage(message);
      });
      ws.on("history", obj => {
        if (obj.length > 0) {
          setHistory(obj);
        }
      });
    } else {
      setWs(webSocket("http://192.168.205.15:7777"));
    }
  }, [ws, history]);

  useEffect(() => {
    document
      .getElementsByClassName("textarea")[0]
      .addEventListener("keypress", () => {
        if (window.event.keyCode === 13) {
          if (history && message) {
            setHistory([
              ...history,
              { name: "jeff", msg: message, time: moment().valueOf() }
            ]);
          }
        }
      });
  });
  console.log(history);
  // useEffect(() => {
  //   if (prevAmount && prevAmount.room !== room) {
  //     setMessages([]);
  //   }
  // }, [prevAmount, room]);

  const selectObject = room => {
    if (room !== "") {
      setRoom(room);
      ws.emit("joinRoom", room);
    }
  };
  return (
    <div style={{ display: "flex", width: "100%", height: "100vh" }}>
      <div style={{ width: "12.5%", minWidth: "230px", height: "100%" }}>
        <Menu selectObject={selectObject} />
      </div>
      <div style={{ width: "87.5%", height: "100%" }}>
        <ChatRoom ws={ws} history={history} />
      </div>
    </div>
  );
}

export default App;
