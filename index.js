const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");

const userRoute = require("./routes/user");
const postRoute = require("./routes/post");
const commentRoute = require("./routes/comment");

dotenv.config();

app.use(morgan("dev"));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));

//request로 받고 response로 보내기
app.get("/", (req, res) => {
  res.send("Hello world!");
});

//순서중요
app.use("/user", userRoute);
app.use("/post", postRoute);
app.use("/comment", commentRoute);

app.listen(3060, () => {
  console.log(">>>>>>>>server is running on port 3060");
});
