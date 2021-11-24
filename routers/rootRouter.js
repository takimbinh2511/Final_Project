const {Router}=require("express");
const{userRouter}=require("../routers/user.router");
const{authRouter} = require("../routers/auth.router");
const{customerRouter}=require("../routers/customer.router");
const rootRouter = Router();


rootRouter.use("/admin",userRouter);

rootRouter.use("", authRouter);

rootRouter.use("/customer", customerRouter);

module.exports={
    rootRouter,
};