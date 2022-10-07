import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000;
const app = express();
const logger = morgan("dev");
app.use(logger);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

// ▼▼▼▼▼▼▼▼▼▼▼ 이 사이에 코드 작성

// ▲▲▲▲▲▲▲▲▲▲▲ 이 사이에 코드 작성
const handleListening = () => console.log(`server listening on port ${PORT}`);

app.listen(PORT, handleListening);
