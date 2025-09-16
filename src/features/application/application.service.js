import mongoose from "mongoose";

import Application from "./application.schema.js"


const applications = mongoose.model("applications", Application);

export const applyJobService = async (data) => {
    try {
        let result = await applications.create(data)
        return result
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getapplicationsService = async (data) => {
    try {
        let result = await applications.aggregate([
            {
                $match: {
                    job_id: new mongoose.Types.ObjectId(data)
                }
            },
            {
                $lookup: {
                    from: "jobs",
                    localField: "job_id",
                    foreignField: "_id",
                    as: "applicationInfo"
                },
            },
            {
                $unwind: {
                    path: "$applicationInfo"
                }
            },
            {
                $project: {
                    job_id: 1,
                    resume: 1,
                    status: 1,
                    title: "$applicationInfo.title",
                    location: "$applicationInfo.location",
                    salary_range: "$applicationInfo.salary_range",
                    description: "$applicationInfo.description"
                }
            }
        ])
        if (result.length == 0) {
            throw new Error("No applications found")
        }
        return result
    } catch (error) {
        throw new Error(error.message);
    }
}

export const updateApplicationStatusService = async (data) => {
    try {
        let result = await applications.updateOne({ _id: data._id }, { status: data.status })
        return result
    } catch (error) {
        throw new Error(error.message);
    }
}