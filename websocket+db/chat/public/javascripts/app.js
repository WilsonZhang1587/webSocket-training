// 連結 server
socket = io.connect("ws://192.168.205.15:3001");

// 滾動軸 固定置底
function scrollWindow() {
  let h = document.querySelector(".chats");
  h.scrollTo(0, h.scrollHeight);
}

// 接收到 server 傳來的歷史訊息 新增至介面
function appendData(obj) {
  let el = document.querySelector(".chats");
  let html = el.innerHTML;

  obj.forEach(element => {
    //   因為後端 time: moment().valueOf() ，所以 fromNow 化，變成 X 秒/分鐘 前
    html += `
            <div class="chat">
                <div class="group">
                    <div class="name">${element.name}：</div>
                    <div class="msg">${element.msg}</div>
                </div>
                <div class="time">${moment(element.time).fromNow()}</div>
            </div>
            `;
  });
  el.innerHTML = html.trim();
  scrollWindow();
}

// 送出訊息至 mongo.db
function Send() {
  let name = document.querySelector("#name").value;
  let msg = document.querySelector("#msg").value;
  if (!msg && !name) {
    alert("請輸入大名和訊息");
    return;
  }
  let data = {
    name: name,
    msg: msg
  };
  // 給 socket 監控 data
  socket.emit("message", data);
  // 訊息欄位歸零
  document.querySelector("#msg").value = "";
}

// 當有新訊息時，要 append 進去
socket.on("message", obj => {
  console.log(obj);
  appendData([obj]);
});

// 拿取歷史訊息
socket.on("history", obj => {
  if (obj.length > 0) {
    appendData(obj);
  }
});

// 監聽 click 事件
document.querySelector("button").addEventListener("click", () => {
  Send();
});
