import mongoose from "mongoose";
import userSchema from "./users.schema.js";
import bcrypt from "bcrypt"
import userDetails from "../userDetails/userDetails.schema.js";

const Users = mongoose.model("Users", userSchema)
const UserDetails = mongoose.model("userDetails", userDetails)

export const registerService = async (data) => {
    try {
        const result = await Users.create(data)
        return result
    } catch (error) {
        throw new Error(error);
    }
}

export const loginService = async (data) => {
    try {
        let result = await Users.find({ email: data.email })
        if (result.length > 0) {
            let result1 = await bcrypt.compare(data.password, result[0].password)
            if (result1) {
                return result
            }
            else {
                throw new Error("Email or Password is Incorrect");
            }
        }
        else {
            throw new Error("Email or Password is Incorrect");
        }
    } catch (error) {
        throw new Error(error.message);

    }

}

export const getUserService = async (data) => {
    try {
        let result = await Users.aggregate([
           
            {
                $lookup: {
                    from: "userdetails",
                    localField: '_id',
                    foreignField: 'id',
                    as: "user_info"
                },
            }, {
                $project: {
                    _id: 1,
                    name: 1,
                    email: 1,
                    "user_info.phone": 1,
                    "user_info.location": 1,
                    "user_info.skills": 1,
                    "user_info.experience": 1,
                }
            }
        ])
        return result
    } catch (error) {
        throw new Error(error)
    }
}