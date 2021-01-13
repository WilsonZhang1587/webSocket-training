import React, { useState } from "react";
import { ChatRoomStyle, HeaderLeft, HeaderRight } from "./ChatRoomHeaderStyle";

function ChatRoomHeader() {
  const [favoriteStatus, changeFavoriteStatus] = useState(false);

  return (
    <ChatRoomStyle>
      <HeaderLeft>
        <div className="leftTop">
          <div
            className="favoriteIcons"
            onClick={() => {
              if (favoriteStatus) {
                changeFavoriteStatus(false);
              } else {
                changeFavoriteStatus(true);
              }
            }}
          >
            <img
              src={require("../../asset/hasFavorite.svg")}
              alt="加入最愛"
              style={{
                display: favoriteStatus ? "block" : "none"
              }}
            />
            <img
              className="nohasFavorite"
              src={require("../../asset/nohasFavorite.svg")}
              alt="不加入最愛"
              style={{
                display: favoriteStatus ? "none" : "block"
              }}
            />
          </div>
          <div className="downIcon">
            <p>Town Square</p>
            <img
              src={require("../../asset/angle-arrow-down.svg")}
              alt="下拉選單"
            />
          </div>
        </div>
        <div className="leftBottom">
          <div>{/* 上下線狀態的 icon */}</div>
          <div>離開 ．</div>&nbsp;
          <div className="addText">新增頻道敘述</div>
        </div>
      </HeaderLeft>
      <HeaderRight>
        <div className="dink">
          <img src={require("../../asset/dink.svg")} alt="釘選的訊息" />
        </div>
        <div className="search">
          <img src={require("../../asset/search.svg")} alt="搜尋選項" />
          <input type="text" placeholder="搜尋" />
        </div>
        <div className="mouse">
          <img src={require("../../asset/mouse.svg")} alt="最近提及" />
        </div>
        <div className="message">
          <img src={require("../../asset/message.svg")} alt="被標記的訊息" />
        </div>
      </HeaderRight>
    </ChatRoomStyle>
  );
}

export default ChatRoomHeader;
