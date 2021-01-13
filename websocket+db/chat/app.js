var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// 導入 連接 mongo.db 的 socket
const SocketHander = require("./socket/index");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// 製作透過 http 包裝的 server
const server = require("http").Server(app);
// 再利用 socket.io 啟動
const io = require("socket.io")(server);

// 監控所有事件
io.on("connection", async socket => {
  console.log("a user connected");

  // new 一個新的 mongo.db 的 model
  socketHander = new SocketHander();
  // 連接 mongo.db
  socketHander.connect();

  // 監控離線
  socket.on("disconnect", () => {
    console.log("a user go out");
  });

  // 監控訊息 當有人傳送訊息時，將訊息寫入資料庫
  socket.on("message", obj => {
    socketHander.storeMessages(obj);
    io.emit("message", obj);
  });

  // 從 mongo.db 獲取歷史訊息
  const history = await socketHander.getMessages();
  // 我們要將歷史訊息的廣播對象鎖定為當前用戶
  const socketid = socket.id; // 由於連線時 socket 會自動配給 id，利用 socket.id 就可取得
  io.to(socketid).emit("history", history);
});

server.listen(3001);

module.exports = app;
