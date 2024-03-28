import express from "express";
import {
  createRoomTypes,
  updateRoomTypes,
  deleteRoomTypes,
  getRoomType,
  getRoomTypes,
  countByRoomType,
  getRoomsNumber


} from "../controllers/roomtype.js";
import RoomTypes from "../models/RoomTypes.js";
import { verifyAdmin } from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createRoomTypes);

//UPDATE
router.put("/:id", verifyAdmin, updateRoomTypes);
//DELETE
router.delete("/:id", verifyAdmin, deleteRoomTypes);
//GET

router.get("/find/:id", getRoomType);
//GET ALL

router.get("/", getRoomTypes);
router.get("/countByRoomType", countByRoomType);

// router.get("/countByType", countByType);
router.get("/room/:id", getRoomsNumber);

export default router;
