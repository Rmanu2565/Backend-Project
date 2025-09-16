import express, { Router } from "express"
import { applyJobController, getapplicationsControlller, updateApplicationStatusController } from "./application.controller.js"
import upload from "../../../middleware/multer.js"

const router = Router()

router.post("/applyJob", upload.single("resume"), applyJobController)
router.get("/getapplications/:id", getapplicationsControlller)
router.put("/updateApplicationStatus", updateApplicationStatusController)


export default router