import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
import { sendResponse } from "../src/utils/response.js";

dotenv.config()
let accesstoken = process.env.ACCESS_TOKEN_KEY

export const createToken = async (req, res) => {
    try {
        let id = req.body.token._id
        let email = req.body.token.email
        let name = req.body.token.name
        const token = jwt.sign({ id, email }, accesstoken, { expiresIn: '1d' })
        let data = {
            id: id,
            email: email,
            name: name,
            token: token
        }
        sendResponse(res, true, 200, "User Login Successful", data)
    } catch (error) {
        return (res, false, 500, error.message)

    }
}

export const authenticateToken = async (req, res, next) => {
    try {
        const authHeader = await req.headers['authorization']
        const token = await authHeader && authHeader.split(' ')[1];
        const verifyToken = jwt.verify(token, accesstoken)

        req.id = verifyToken.id
        next()
    } catch (error) {
        return sendResponse(res, false, 500, error.message)

    }

}