import mongoose from "mongoose";


export const Companies = mongoose.Schema({
    company_name: {
        type: String,
        require: true
    },
    company_website: {
        type: String,
        require: true,
        unique: true
    },
    location: {
        type: String
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    }
})


export default Companies;