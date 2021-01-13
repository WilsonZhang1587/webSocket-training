import React from "react";
import ChatRoomHeader from "./ChatRoomHeader";
import ChatSpace from "./ChatSpace";
import ChatInput from "./ChatInput";

function ChatRoom({ ws,history }) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ChatRoomHeader />
      <ChatSpace ws={ws} history={history}/>
      <ChatInput ws={ws} />
    </div>
  );
}

export default ChatRoom;
