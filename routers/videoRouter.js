import express from "express";
import routes from "../routes";
import {
  upload,
  videoDetail,
  deleteVideo,
  getUpload,
  postUpload
} from "../controllers/videoController";
import { editProfile } from "../controllers/usercontroller";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editProfile);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
