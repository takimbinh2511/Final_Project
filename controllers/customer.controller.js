const {
  getListCustomer,
  getDetailCustomer,
  updateCustomer,
  deleteById,
  createCustomer,
} = require("../services/customer.service");

const getAllCustomer = async (req, res) => {
  const customerList = await getListCustomer();
  if (customerList) {
    res.status(200).send(customerList);
  } else {
    res.status(404).send("Not Found!!");
  }
};

const getByIdCustomer = async (req, res) => {
  const params = req.params;
  const id = params.id;
  const customer = await getDetailCustomer(id);
  if (customer) {
    res.status(200).send(customer);
  } else {
    res.status(404).send("Not Found!!");
  }
};

const addCustomer = async (req, res) => {
  try {
    let customer = req.body;
    const newCustomer = await createCustomer(customer);
    res.status(201).send(newCustomer);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateCustomerById = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = req.body;

    const customerUpdated = await updateCustomer(id, customer);
    if (customerUpdated) {
      res.status(200).send(customerUpdated);
    } else {
      res.status(404).send("Not Found!!");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const customerDeleted = await deleteById(id);
    if (customerDeleted) {
      res.status(200).send(customerDeleted);
    } else {
      res.status(404).send("Not Found!!");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getAllCustomer,
  getByIdCustomer,
  addCustomer,
  updateCustomerById,
  deleteCustomer,
};
