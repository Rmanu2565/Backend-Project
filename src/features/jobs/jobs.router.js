import express, { Router } from "express"
import { createJobController, listJobController, listJobDetailController } from "./jobs.controller.js"

const router = Router()


router.post("/createJob", createJobController)
router.get("/listJobs", listJobController)
router.get("/listJobs/:id", listJobDetailController)


export default router