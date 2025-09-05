import express from "express"
import { getUserController, loginController, registerController } from "./users.controller.js";
import { encrptPassword } from "../../../middleware/encryptPassword.js";
import { authenticateToken, createToken } from "../../../middleware/token.js";


const router = express.Router()

router.post("/auth/register", encrptPassword, registerController)
router.post("/auth/login", loginController, createToken)
router.get("/users/:id", authenticateToken, getUserController)
export default router;