import express, { urlencoded } from "express";
import dotenv from "dotenv";
import { connectPassport } from "./utils/Provider.js";
import session from "express-session";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.js";
import orderRoute from "./routes/order.js";
import passport from "passport";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
const app = express();

export default app;
dotenv.config({
  path: "./config/config.env",
});
//Using Middlewares
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(cookieParser());

app.use(express.json());
app.use(
  urlencoded({
    extended: true,
  })
);
//session ke baad hm app.use(passport krenge)
app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());

//COnfig connect hone ke baad call krna hai hme connectPassport
connectPassport();
//importing routes

app.use("/api/v1", userRoute);

//we have to import errorMiddleware at the end
app.use(errorMiddleware);
