import mongoose from "mongoose";
import AutoIncrementFactory from "mongoose-sequence"

const AutoIncrement = AutoIncrementFactory(mongoose)

export const userDetails = mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        reqired: true,
        unique: true
    },
    phone: { 
        type: String,
        require: true
    },
    location: {
        type: String
    },
    skills: {
        type: Array
    },
    experience: {
        type: String
    },
    projects: {
        type: String
    },
    expectedSalary: {
        type: Number
    },
    resume: {
        type: String
    }

})

userDetails.plugin(AutoIncrement, { inc_field: "userId", start_seq: 1000 })

export default userDetails;