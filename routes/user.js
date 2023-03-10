import express from "express";
import passport from "passport";
import { logout, myProfile } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get(
  "/googlelogin",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

//after login from google , the url to go
router.get(
  "/login",
  passport.authenticate("google"),
  //since we dont have frontend ready now
  //   passport.authenticate("google", {
  //     scope: ["profile"],
  //     successRedirect: process.env.FRONTEND_URL,
  //   })
  (req, res, next) => {
    res.send("Logged In");
  }
);

router.get("/me", isAuthenticated, myProfile);
router.get("/logout", logout);
export default router;
