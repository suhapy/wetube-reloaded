import express from "express";
import { trending } from "../controllers/videoController";
import { join } from "../controllers/userController";

const grobalRouter = express.Router();

grobalRouter.get("/", trending);
grobalRouter.get("/join", join);

export default grobalRouter;
