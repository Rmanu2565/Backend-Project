import mongoose from "mongoose";
import userDetails from './userDetails.schema.js'

const UserDetails = mongoose.model("userDetails", userDetails)


export const addUserDetailsService = async (data) => {
    try {
        let result = await UserDetails.create(data)
        return result
    } catch (error) {
        throw new Error ("User Details Are already found")
    }
}