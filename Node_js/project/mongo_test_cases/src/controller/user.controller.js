
import { User } from "./../model/user.model.js"
import { ApiError } from "./util/ApiError.js"
import { body,param, query,validationResult } from 'express-validator';



const registerValidator = [
    query("fullName").exists().withMessage("fullName is required"),
    query("email").exists().withMessage("Email is required"),
    query("password").exists().withMessage("Password is required"),
    query("username").exists().withMessage("Username is required"), (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        next();
      }
]


const getValidator = [
    param('id').isLength({ min: 24 }).withMessage("Invalid ID"), (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        //   return res.status(400).json({ errors: errors.array() });
        console.log(req.query)
          throw new ApiError(400, "Invalid Input ",errors)   
        }
        next();
      }
]   
const registerUser = async (req, res) => {
    // console.log(req.body)
    const { fullName, email, password, username } = req.body
    const user = await User.create({
        fullName,
        avatar: 'https://www.cn.com/avatar/url',
        coverImage: 'https://www.cn.com/coverimage/url' || "",
        email,
        password,
        username: username.toLowerCase()
    })
    res.status(201).json({
        message: "User created successfully",
        user
    })

}


const getUser = async (req, res) => {
    try {

        const { id } = req.params
 

        console.log("Get ID ", id)
        const user = await User.findById(id)


        if (!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }
        res.status(200).json({
            message: "User found successfully",
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

export {
    registerUser,
    getUser,
    getValidator
}
