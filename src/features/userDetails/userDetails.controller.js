import { sendResponse } from "../../utils/response.js"
import { addUserDetailsService, updateUserDetailsService } from "./userDetails.service.js"



export const addUserDetailsController = async (req, res) => {
    try {
        const { id, phone, location, skills, experience, projects, expectedSalary } = req.body
        let data = {
            id: id,
            phone: phone,
            location: location,
            skills: skills,
            experience: experience,
            projects: projects,
            expectedSalary: expectedSalary,
            resume: req.file.path
        }
        const result = await addUserDetailsService(data)
        return sendResponse(res, true, 200, "User Details added Succesfully", result)
    } catch (error) {
        return sendResponse(res, false, 500, error.message)
    }
}

export const updateUserDetailsController = async (req, res) => {
    try {
        let data = req.body;
        let result = await updateUserDetailsService(data)
        sendResponse(res, true, 200, "User Details Updated Successfully", result)
    } catch (error) {
        sendResponse(res, false, 500, error.message)
    }
}
