import { sendResponse } from "../../utils/response.js";
import { applyJobService, getapplicationsService, updateApplicationStatusService } from "./application.service.js";


export const applyJobController = async (req, res) => {
    try {
        let data = {
            resume: req.file.path,
            ...req.body
        }
        let result = await applyJobService(data)
        sendResponse(res, true, 200, "Job Applied Successfully", result)
    } catch (error) {
        sendResponse(res, false, 500, error.message)
    }
}

export const getapplicationsControlller = async (req, res) => {
    try {
        let data = req.params
        let result = await getapplicationsService(data)
        sendResponse(res, true, 200, "Applications Fetched Successfully", result)
    } catch (error) {
        sendResponse(res, false, 500, error.message)
    }
}

export const updateApplicationStatusController = async (req, res) => {
    try {
        let data = req.body
        let result = await updateApplicationStatusService(data)
        sendResponse(res, true, 200, "Application Status Updated Successfully", result)
    } catch (error) {
        sendResponse(res, false, 500, error.message)
    }
}