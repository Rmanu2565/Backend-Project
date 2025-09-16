import { sendResponse } from "../../utils/response.js"
import { getUserService, loginService, registerService } from "./users.service.js"


export const registerController = async (req, res) => {
    try {
        let data = req.body
        let result = await registerService(data)
        return sendResponse(res, true, 200, "User Registered Successfully", result)
    } catch (error) {
        return sendResponse(res, false, 500, error.message)
    }
}

export const loginController = async (req, res, next) => {
    try {
        let data = req.body
        let result = await loginService(data)
        console.log(result, "ressss")
        req.body.token = result[0]
        next()
    } catch (error) {
        return sendResponse(res, false, 500, error.message)
    }
}

export const getUserController = async (req, res) => {
    try {
        const data = req.id
        const result = await getUserService(data)
        return sendResponse(res, true, 200, "User Details Messaged Succesfully", result)
    } catch (error) {
        return sendResponse(res, false, 500, error.message)
    }
}

