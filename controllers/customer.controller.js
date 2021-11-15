const{getListCustomer,getDetailCustomer,updateCustomer,deleteById,createCustomer} = require("../services/customer.service")

const getAllCustomer = async (req, res) => {
    const customerList = await getListCustomer();
    if (customerList)
    {
        res.status(200).send(customerList);
    }
    else
    {
        res.status(404).send("Not Found!!");
    }
   
};

const getByIdCustomer= async(req, res) => {
    const params = req.params;
    const id = params.id;
    const customer = await getDetailCustomer(id);
    if(customer )
    {
        res.status(200).send(customer );
    }
    else
    {
        res.status(404).send("Not Found!!");
    }
};

const addCustomer = async (req, res) =>{
    let customer  = req.body;
    const newCustomer= await create(customer);
    res.status(201).send(newCustomer);
};

const updateCustomerById = async (req, res) => {
   const {id} = req.params;
   const customer = req.body;
   
   const customerUpdated = await update(id, customer);
   if (customerUpdated)
   {
       res.status(200).send(studentUpdated);
   }
   else
   {
       res.status(404).send("Not Found!!");
   }
};

const deleteCustomer = async (req, res) => {
    const {id} = req.params;
    const customerDeleted  = await deleteById(id);
    if(customerDeleted)
    {
        res.status(200).send(customerDeleted);
    }
    else
    {
        res.status(404).send("Not Found!!");
    }
};
 
module.exports = {
   getAllCustomer, getByIdCustomer, addCustomer,updateCustomerById, deleteCustomer,
}