const express = require("express");
const customerRouter = express.Router();
const { checkExist } = require("../middlewares/checkexist");
const { Customer } = require("../models/customer.model");
const {
  getAllCustomer,
  getByIdCustomer,
  addCustomer,
  updateCustomerById,
  deleteCustomer,
} = require("../controllers/customer.controller");

// //lấy danh sách khách hàng
// customerRouter.get("/", checkExist, getAllCustomer);

// //lấy thông tin chi tiết  khách hàng
// customerRouter.get("/:id", getByIdCustomer);

// //thêm  khách hàng
// customerRouter.post("/",checkExist(Customer),addCustomer);

// //cập nhật  khách hàng
// customerRouter.put("/:id", updateCustomerById);

// //xóa  khách hàng
// customerRouter.delete("/:id",deleteCustomer);

// module.exports = {
//     customerRouter,
// }

module.exports = function (app) {
  app.post("/api/v1/customer", addCustomer);
  app.get("/api/v1/customer", getAllCustomer);
  app.get("/api/v1/customer/:id", getByIdCustomer);
  app.put("/api/v1/customer/:id", updateCustomerById);
  app.delete("/api/v1/customer/:id", deleteCustomer);
};
