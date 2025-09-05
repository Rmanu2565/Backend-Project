import mongoose from "mongoose";
import AutoIncrementFactory from "mongoose-sequence"

const AutoIncrement = AutoIncrementFactory(mongoose)
export const Users = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        require: true,
        trim: true
    },
    password: {
        type: String
    },
    role: {
        type: String,
        enum: ["jobseeker", "employer", "admin"],
        default: 'jobseeker'
    },
    createdAt: {
        type: Date,
        default: new Date
    }
})
// Users.plugin(AutoIncrement, { inc_field: "id", start_seq: 1 });

export default Users;