// for express things
// express라는 package를 express라는 이름으로 import
import express from "express";
import morgan from "morgan";

// import Routes
import grobalRouter from "./routers/grobalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

// express application 생성, express 설계를 위한 규칙
const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
// expressjs의 view engine default값을 변경해준다.
app.set("views", process.cwd() + "/src/views");

app.use(logger);
app.use(express.urlencoded({ extended: true }));

// Routers
app.use("/", grobalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;
