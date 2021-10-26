import express from "express";
import { home, search } from "../controllers/videoController";
import { join, login } from "../controllers/userController";

const grobalRouter = express.Router();

grobalRouter.get("/", home);
grobalRouter.get("/join", join);
grobalRouter.get("/login", login);

export default grobalRouter;
