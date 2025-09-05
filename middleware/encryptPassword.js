import bcrypt, { hash } from "bcrypt"
import { sendResponse } from "../src/utils/response.js"

export const encrptPassword = async (req, res, next) => {
    try {
        const password = req.body.password
        const salt = await bcrypt.genSalt(10)
        const encrypt = await bcrypt.hash(password, salt)
        req.body.password = encrypt;
        next()
    } catch (error) {
        return sendResponse(res,false,500,error.message)
    }
}