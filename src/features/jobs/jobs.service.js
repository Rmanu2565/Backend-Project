import mongoose from "mongoose";
import Jobs from "./jobs.schema.js";

const Job = mongoose.model("jobs", Jobs)


export const createJobService = async (data) => {
    try {
        let result = await Job.create(data)
        return result
    } catch (error) {
        throw new Error(error.message);
    }
}

export const listJobService = async (data) => {
    try {
        let result = await Job.aggregate([

            {
                $lookup: {
                    from: "companies",
                    localField: "company_id",
                    foreignField: "_id",
                    as: "companyInfo"
                }
            },
            {
                $unwind: {
                    path: "$companyInfo",
                }
            },
            {
                $project: {
                    title: 1,
                    description: 1,
                    location: 1,
                    company_name: "$companyInfo.company_name",
                }
            }
        ])
        return result
    } catch (error) {
        throw new Error(error.message);

    }
}

export const listJobDetailService = async (data) => {
    try {
        let result = await Job.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(data)
                }
            },
            {
                $lookup: {
                    from: "companies",
                    localField: "company_id",
                    foreignField: "_id",
                    as: "companyInfo"
                }
            },
            {
                $unwind: {
                    path: "$companyInfo",
                }
            },
            {
                $project: {
                    title: 1,
                    description: 1,
                    location: 1,
                    salary_range: 1,
                    openings: 1,
                    company_name: "$companyInfo.company_name",
                    company_website: "$companyInfo.company_website",
                }
            }
        ])
        return result
    } catch (error) {
        throw new Error(error.message);

    }
}