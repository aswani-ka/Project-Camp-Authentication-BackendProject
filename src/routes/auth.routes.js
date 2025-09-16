import { Router } from "express";
import { login, registerUser, logoutUser, verifyEmail, refreshAccessToken, forgotPasswordRequest, resetForgotPassword, getcurrentUser, changeCurrentPassword, resendEmailVerification } from "../controllers/auth.controllers.js"
import { validate } from "../middlewares/validator.middleware.js";
import { userChangeCurrentPasswordValidator, userForgotPasswordValidator, userLoginValidator, userRegisterValidator } from "../validators/index.js";
import { verifyJWT } from "../middlewares/auth.middleware.js"

const router = Router();

//unsecured route

router.route("/register").post(userRegisterValidator(), validate, registerUser);

router.route("/login").post(userLoginValidator(), validate, login);

router
.route("/verify-email/:verificationToken")
.get(verifyEmail);

router
.route("/refresh-token/:refreshAccessToken")
.post(refreshAccessToken);

router
.route("/forgot-password")
.post(userForgotPasswordValidator(), validate, forgotPasswordRequest);

router
.route("/reset-password/:resetToken")
.post(userForgotPasswordValidator(), validate, resetForgotPassword);

//secure routes

router.route("/logout").post(verifyJWT, logoutUser);
router.route("/current-user").post(verifyJWT, getcurrentUser);
router.route("/change-password").post(verifyJWT, userChangeCurrentPasswordValidator(), validate, changeCurrentPassword);
router.route("/resend-email-verification").post(verifyJWT, resendEmailVerification);

export default router;