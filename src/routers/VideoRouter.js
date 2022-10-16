import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
  deleteVideo,
  search,
} from "../controllers/videoController";

const videoRouter = express.Router();

//mongodb id 규칙
// https://mongodb.github.io/node-mongodb-native/api-bson-generated/objectid.html
// 숫자 : \d+
// 24개 16진수 : [0-9a-f]{24}

videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
videoRouter.route("/:id([0-9a-f]{24})/delete").get(deleteVideo);
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;
