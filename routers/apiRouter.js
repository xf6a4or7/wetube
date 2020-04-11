import express from "express";
import routes from "../routes";
import {
  postRegisterView,
  postAddComments
} from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterView);
apiRouter.post(routes.addComment, postAddComments);

export default apiRouter;
