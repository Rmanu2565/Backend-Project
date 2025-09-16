import { sendResponse } from "../../utils/response.js"
import { createJobService, listJobDetailService, listJobService } from "./jobs.service.js"


export const createJobController = async (req, res) => {
    try {
        let data = req.body
        let result = await createJobService(data)
        sendResponse(res, true, 200, "Job Created Successfully", result)
    } catch (error) {
        sendResponse(res, false, 500, "Job Didn't Created")
    }
}

export const listJobController = async (req, res) => {
    try {
        let data = req.params
        console.log(data, "dataapramas")
        let result = await listJobService(data)
        sendResponse(res, true, 200, "Jobs list fetched Successfully", result)
    } catch (error) {
        sendResponse(res, false, 500, error.message)
    }
}

export const listJobDetailController = async (req, res) => {
    try {
        let data = req.params
        console.log(data, "dataapramas")
        let result = await listJobDetailService(data)
        sendResponse(res, true, 200, "Jobs list fetched Successfully", result)
    } catch (error) {
        sendResponse(res, false, 500, error.message)
    }
}