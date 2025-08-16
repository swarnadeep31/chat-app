import express from "express";
import { protectRoute } from "../middleware/auth.middleware";
import { getMessages, getUsersFromSiderbar, sendMessage } from "../controllers/message.controller";

const router = express.Router();

router.get("/users",protectRoute,getUsersFromSiderbar);
router.get("/:id", protectRoute, getMessages);

router.post("/send/:id",protectRoute,sendMessage);

export default router;