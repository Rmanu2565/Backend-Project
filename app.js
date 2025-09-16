import express from "express"
import cors from "cors"
import userRouter from "./src/features/users/users.router.js"
import userDetails from "./src/features/userDetails/userDetails.router.js"
import companies from "./src/features/companies/companies.router.js"
import jobs from "./src/features/jobs/jobs.router.js"
import applications from "./src/features/application/application.router.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/v1/users", userRouter)
app.use("/api/v1/userDetails", userDetails)
app.use("/api/v1/companies", companies)
app.use("/api/v1/jobs", jobs)
app.use("/api/v1/applications", applications)
export default app;