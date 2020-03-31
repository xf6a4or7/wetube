import express from "express";
import routes from "../routes";
import { home } from "../controllers/videoController";
import {
  editProfile,
  changePassword,
  userDetail,
  users
} from "../controllers/usercontroller";

const userRouter = express.Router();

userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail, userDetail);

export default userRouter;
