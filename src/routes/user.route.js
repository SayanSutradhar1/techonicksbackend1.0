import { Router } from "express";
import { createUser } from "../controllers/userCreate.controller.js";
import { isAuthenticated, isLoggedIn } from "../middlewares/auth.middleware.js";
import { findUserByToken, login, logout } from "../controllers/userAuth.controller.js";

const userRouter = Router();

userRouter.route("/register").post(createUser);
userRouter.route("/login").post(isLoggedIn,login)
userRouter.route("/logout").post(logout)
userRouter.route('/profile').post(isAuthenticated,findUserByToken)

export { userRouter }