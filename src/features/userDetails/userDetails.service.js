import mongoose from "mongoose";
import userDetails from './userDetails.schema.js'

const UserDetails = mongoose.model("userDetails", userDetails)


export const addUserDetailsService = async (data) => {
    try {
        let result = await UserDetails.create(data)
        return result
    } catch (error) {
        throw new Error("User Details Are already found")
    }
}

export const updateUserDetailsService = async (data) => {
    try {
        let result = await UserDetails.updateOne({ id: new mongoose.Types.ObjectId(data.id) },
            { $set: { expectedSalary: data.expectedSalary, projects: data.projects, experience: data.experience, skills: data.skills, location: data.location, phone: data.phone } })
        return result
    } catch (error) {
        throw new Error(error)
    }
}