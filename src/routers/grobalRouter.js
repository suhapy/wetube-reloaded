import express from "express";
import { trending } from "../controllers/videoController";
import { join, login } from "../controllers/userController";

const grobalRouter = express.Router();

grobalRouter.get("/", trending);
grobalRouter.get("/join", join);
grobalRouter.get("/login", login);

export default grobalRouter;
