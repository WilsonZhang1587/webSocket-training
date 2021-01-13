const express = require("express");
const app = express();

//將 express 放進 http 中開啟 Server 的 3000 port ，正確開啟後會在 console 中印出訊息
const server = require("http")
  .Server(app)
  .listen(7777, () => {
    console.log("open server!");
  });

//將啟動的 Server 送給 socket.io 處理
const io = require("socket.io")(server);

/*上方為此寫法的簡寫：
  const socket = require('socket.io')
  const io = socket(server)
*/

// 導入 連接 mongo.db 的 socket
const SocketHander = require("./socket/index");

//監聽 Server 連線後的所有事件，並捕捉事件 socket 執行
io.on("connection", async socket => {
  let nowRoom;

  //經過連線後在 console 中印出訊息
  console.log("success connect!");

  // new 一個新的 mongo.db 的 model
  socketHander = new SocketHander();
  // 連接 mongo.db
  socketHander.connect();

  // 監控離線
  socket.on("disconnect", () => {
    console.log("a user go out");
  });

  socket.on("joinRoom", room => {
    nowRoom = room;

    socket.join(room);
    //(1)發送給在同一個 room 中除了自己外的 Client
    socket.to(room).emit("addRoom", "已有新人加入聊天室！");
    //(2)發送給在 room 中所有的 Client
    io.in(room).emit("addRoom", "已加入聊天室！");
  });

  socket.on("leave", () => {
    if (nowRoom !== undefined) {
      socket.leave(nowRoom);
    }
  });

  //監聽透過 connection 傳進來的事件
  socket.on("message", obj => {
    socketHander.storeMessages(obj);
    io.in(nowRoom).emit("getmessage", obj);
  });

  // 從 mongo.db 獲取歷史訊息
  const history = await socketHander.getMessages();
  // 我們要將歷史訊息的廣播對象鎖定為當前用戶
  const socketid = socket.id; // 由於連線時 socket 會自動配給 id，利用 socket.id 就可取得
  io.in(nowRoom)
    .to(socketid)
    .emit("history", history);
});
