import express from "express"
import cors from "cors"
import userRouter from "./src/features/users/users.router.js"
import userDetais from "./src/features/userDetails/userDetails.router.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/v1/users", userRouter)
app.use("/api/v1/userDetails",userDetais)
export default app;