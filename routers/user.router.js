const express = require("express");
const userRouter = express.Router();

const {
  findAllUser,
  findDetailUser,
  createUser,
  removeUser,
  updateUser,
} = require("../controllers/user.controller");
const { authenticate, authorize } = require("../middlewares/verifytoken");
// const {checkExist} = require("../middlewares/checkexist");
// const {User} = require("../models/user.model");

// chuẩn tạo api ( RestFul APIs )
// lấy danh sách user -- http://localhost:7000/api/v1/admin/
// userRouter.get("/", findAllUser);
// // lấy chi tiết user -- http://localhost:7000/api/v1/user/11
// userRouter.get("/:id", findDetailUser );
// // // tạo user -- http://localhost:7000/api/v1/user/
// userRouter.post("/", createUser);
// // // xóa user -- http://localhost:7000/api/v1/user/20
// // userRouter.delete("/:id",authenticate,authorize(["Super_Admin"]),removeUser);
// // // update -- http://localhost:7000/api/v1/user/7
// // userRouter.put("/:id",checkExist(User),authenticate,authorize(["Super_Admin"]),updateUser);

// module.exports = {
//     userRouter,
// };

module.exports = function (app) {
  app.post("/api/v1/admin", authenticate, createUser);
  app.get("/api/v1/admin", findAllUser);
  app.get("/api/v1/admin/:id", findDetailUser);
  app.put("/api/v1/admin/:id", updateUser);
  app.delete("/api/v1/admin/:id", removeUser);
};
