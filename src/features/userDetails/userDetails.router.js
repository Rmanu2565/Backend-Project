import express from "express"
import { addUserDetailsController } from "./userDetails.controller.js"
import upload from "../../../middleware/multer.js"
const router = express.Router()

router.post("/addUserDetails", upload.single("resume"), addUserDetailsController)


export default router