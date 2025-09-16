import mongoose from "mongoose";
import Companies from "./companies.schema.js"

const Company = mongoose.model("Companies", Companies)


export const createCompanyService = async (data) => {
    try {
        let result = await Company.create(data)
        return result;
    } catch (error) {
        throw new Error(error.message);
    }

}

export const listCompaniesService = async (data) => {
    try {
        let result = await Company.find().select({ userId: 0 })
        if (result.length > 0) {
            return result
        }
        else {
            return "Companies are not Listed Yet"
        }
    } catch (error) {
        throw new Error("Can't find Company List");

    }
}