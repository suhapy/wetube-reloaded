import express from "express";
import { see, getEdit, postEdit } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", see);
// videoRouter.get("/:id(\\d+)/edit", getEdit);
// videoRouter.post("/:id(\\d+)/edit", postEdit);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);

export default videoRouter;
