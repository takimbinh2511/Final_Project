// const { Router } = require("express");
const { signIn } = require("../controllers/auth.controller");
const { authenticate, authorize } = require("../middlewares/verifytoken");

// const authRouter = Router();
// //http://localhost:3000/api/v1/auth/sign-in
// authRouter.post("/sign-in",signIn);

// module.exports = {
//     authRouter,
// };


module.exports = function (app) {
    app.post("/api/v1/auth/sign-in",signIn);
    app.get("/api/v1/auth/", authenticate,(req, res)=>{
        return res.send(req.user);
    });
};
  