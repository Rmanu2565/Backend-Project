import express from "express"
import { addUserDetailsController, updateUserDetailsController } from "./userDetails.controller.js"
import upload from "../../../middleware/multer.js"
const router = express.Router()

router.post("/addUserDetails", upload.single("resume"), addUserDetailsController)
router.post("/updateUserDetails", updateUserDetailsController)

export default router