import express from "express";
import routes from "../routes";
import {
  editProfile,
  changePassword,
  userDetail
} from "../controllers/usercontroller";
import { onlyPrivate } from "../middleware";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, editProfile);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
