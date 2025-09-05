import mongoose from "mongoose";

export const Notification = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.id,
        ref: 'Users',
        required: true
    },
    message: {
        type: String
    },
    notification_type: {
        type: String,
        enum: ["email", "system"],
        required: true
    },
    is_Read: {
        type: String,
        enum: ["read", "unread"],
        default: "unread"
    }
    ,
}, {
    timestamps: true
})