import { Router } from "express";

import { registerUser, getUser, getValidator } from "../controller/user.controller.js";



const userRoute = Router()

userRoute.route("/getuser/:id").get(getValidator, getUser)

export default userRoute;