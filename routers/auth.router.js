// const { Router } = require("express");
const { signIn } = require("../controllers/auth.controller");

// const authRouter = Router();
// //http://localhost:3000/api/v1/auth/sign-in
// authRouter.post("/sign-in",signIn);

// module.exports = {
//     authRouter,
// };

module.exports = function (app) {
    app.post("/api/v1/auth/sign-in", signIn);
};
  