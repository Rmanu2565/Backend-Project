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
    company_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Companies"
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
},
    { timestamps: true }
)

export default Jobs;