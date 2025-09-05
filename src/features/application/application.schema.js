import mongoose from "mongoose";

export const Application = mongoose.Schema({
    job_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Jobs"
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    resume: {
        type: String
    },
    status: {
        type: String,
        enum: ["Applied", "Shortlisted", "Rejected", "Hired"],
        default: "Applied"
    },
    applied_at: {
        type: Date,
        default: Date.now
    },
}, {
    timestamps: true
})