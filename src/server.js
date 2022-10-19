import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
import { localsMiddleware } from "./middlewares";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  })
); // 라우터보다 먼저 호출되어야 한다.세션은 서버 메모리에 저장된다. 서버 재시작시 사라진다.

app.use(localsMiddleware);

app.use("/", rootRouter);
app.use("/uploads", express.static("uploads")); // 로컬 폴더에 접근할 수 있게 해주는 옵션
app.use("/static", express.static("assets"));
app.use("/videos", videoRouter);
app.use("/users", userRouter);

// ▼▼▼▼▼▼▼▼▼▼▼ 이 사이에 코드 작성

// ▲▲▲▲▲▲▲▲▲▲▲ 이 사이에 코드 작성

export default app;
