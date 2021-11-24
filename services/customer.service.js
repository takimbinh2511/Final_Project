const { Customer } = require("../models/customer.model");

const getListCustomer = async () => {
  const customerList = await Customer.find();
  if (customerList) {
    return customerList;
  } else {
    return false;
  }
};

const getDetailCustomer = async (id) => {
  const customers = await Customer.findOne({
    where: {
      id, //id:id,
    },
  });
  return customers;
};
const createCustomer = async (customers) => {
  const newCustomer = await Customer.create(customers);
  return newCustomer;
};

const updateCustomer = async (id, customers) => {
  const customerUpdate = await getDetailCustomer(id);

  if (customerUpdate) {
    customerUpdate.fullName = customers.fullName;
    customerUpdate.cmnd = customers.cmnd;
    customerUpdate.numberPhone = customers.numberPhone;
    customerUpdate.numberRoom = customers.numberRoom;
    customerUpdate.debit = customers.debit;
    customerUpdate.currency = customers.currency;
    await customerUpdate.save();
    return customerUpdate;
  } else {
    return false;
  }
};

const deleteById = async (id) => {
  const customerDelete = await getDetailCustomer(id);
  if (customerDelete) {
    await Customer.deleteOne({ _id: id });
    return customerDelete;
  } else {
    return false;
  }
};

module.exports = {
  getListCustomer,
  getDetailCustomer,
  createCustomer,
  deleteById,
  updateCustomer,
};
