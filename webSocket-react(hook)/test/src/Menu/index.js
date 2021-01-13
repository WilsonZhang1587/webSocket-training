import React from "react";
import { User, MenuList, ChangeChannel } from "./MenuStyle";

export default function Menu({ selectObject }) {
  return (
    <div style={{ height: "100%" }}>
      {/* 會員id */}
      <User>
        <div>
          <div>
            <div>
              <div>
                <img src={require("../asset/user.jpg")} alt="會員大頭貼" />
              </div>
              <div>{/* online status icon */}</div>
            </div>
            <div>
              <p>TWITD</p>
              <p>@User</p>
            </div>
          </div>
          <div>
            <img src={require("../asset/menu.svg")} alt="選單" />
          </div>
        </div>
      </User>
      {/* menu*/}
      <MenuList>
        <div>
          <ul>
            <li>
              <p>公開頻道</p>
              <p>+</p>
            </li>
            {/* 公開頻道 */}
            <li
              style={{ cursor: "pointer" }}
              onClick={() => {
                selectObject("頻道一");
              }}
            >
              <p>頻道一</p>
            </li>
            <li
              style={{ cursor: "pointer" }}
              onClick={() => {
                selectObject("頻道二");
              }}
            >
              <p>頻道二</p>
            </li>
          </ul>
          <ul>
            <li>
              <p>私人頻道</p>
              <p>+</p>
            </li>
            {/* 私人頻道 */}
          </ul>
          <ul>
            <li>
              <p>直接傳訊</p>
              <p>+</p>
            </li>
            {/* 直接傳訊 */}
          </ul>
        </div>
      </MenuList>
      {/* 切換頻道 */}
      <ChangeChannel>切換頻道 - CTRL+K</ChangeChannel>
    </div>
  );
}
