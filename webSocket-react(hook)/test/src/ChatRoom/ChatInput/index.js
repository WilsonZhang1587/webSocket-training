import React from "react";

import { ChatInputDiv } from "./ChatInputStyle";
function ChatInput({ ws }) {
  const submit = e => {
    let key = window.event.keyCode;
    let data = {
      name: "wilson",
      msg: e.target.value
    };
    if (key !== 10) {
      if (key === 13) {
        window.event.returnValue = false;

        if (!!e.target.value) {
          ws.emit("message", data);
          e.target.value = null;
        }
      }
    } else {
      e.target.value = e.target.value + "\n";
    }
  };

  return (
    <ChatInputDiv>
      <div className="chatInputDiv">
        <div className="chatTextarea">
          <textarea
            className="textarea"
            type="text"
            placeholder="輸入訊息..."
            cols="130"
            spellCheck="true"
            onKeyPress={submit}
          />
        </div>
        <div className="uploadAndFaceImg">
          <div className="uploadIcon">
            <input type="file" />
            <img src={require("../../asset/fileIcon.svg")} alt="上傳檔案" />
          </div>
          <div className="faceImg">
            <img src={require("../../asset/faceImg.svg")} alt="表情包" />
          </div>
        </div>
      </div>
      <div className="description">
        <a href="http://192.168.205.13:8065/help/messaging">說明</a>
      </div>
    </ChatInputDiv>
  );
}

export default ChatInput;
