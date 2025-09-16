import mongoose from "mongoose";

export const Jobs = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    location: {
        type: String
    },
    salary_range: {
        type: String
    },
    openings: {
        type: Number
    },
    company_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Companies",
        require: true
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        require: true
    },
},
    { timestamps: true }
)

export default Jobs;