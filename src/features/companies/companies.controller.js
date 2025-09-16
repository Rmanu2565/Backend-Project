import { sendResponse } from "../../utils/response.js"
import { createCompanyService, listCompaniesService } from "./companies.service.js"


export const createCompanyController = async (req, res) => {
    try {
        let data = req.body
        let result = await createCompanyService(data)
        sendResponse(res, true, 200, "Company created Successfully", result)
    } catch (error) {
        sendResponse(res, false, 500, error.message, [])
    }
}

export const listCompaniesController = async (req, res) => {
    try {
        let data = req.body
        let result = await listCompaniesService(data)
        sendResponse(res, true, 200, "Companies List Fetched Successfully", result)
    } catch (error) {
        sendResponse(res, false, 500, error.message)
    }
}