import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import morgan from "morgan"
import { registerUser, getUser, getValidator } from "./controller/user.controller.js"
import { Error_handler_middleware } from "./controller/util/error_handler_middleware.js"
import  userRoute  from "./route/userRoutes.js"


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())


morgan('dev')



app.use("/users/register", registerUser)

app.use("/users", userRoute)
app.use(Error_handler_middleware)


export { app }