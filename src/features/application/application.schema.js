import mongoose from "mongoose";

export const Application = mongoose.Schema({
    job_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Jobs",
        require: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        require: true
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

export default Application;