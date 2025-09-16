import { Router } from "express";
import { createCompanyController, listCompaniesController } from "./companies.controller.js";


const router = Router();

router.post("/createCompany", createCompanyController)
router.get("/listCompanies", listCompaniesController)



export default router;